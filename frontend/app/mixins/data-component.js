import Ember from 'ember';

export default Ember.Mixin.create({
  //fastboot: Ember.inject.service(),
  store: Ember.inject.service(),
  init(){
    this._super(...arguments);

    const queryOptions = this.get('queryOptions') || {
      page: {
        number: 1
      },
      filter: {},
      sort: {}
    };
    let defaultFilterKeys = [];

    for(let f in queryOptions.filter){
      defaultFilterKeys.push(f);
    }

    this.setProperties({
      defaultFilterKeys: defaultFilterKeys,
      queryOptions: queryOptions
    });

    if(this.get('fastboot.isFastBoot')){
      this.fetchModel();
    }
  },

  didInsertElement(){
    this._super(...arguments);
    Ember.run.later(() => {
      this.fetchModel();
    });
  },

  fetchModel(){
    this._beforeRequest();
    this.makeRequest().then((model) => {
      this._setModel(model);
    });
  },

  makeRequest(){
    return new Ember.RSVP.Promise((resolve) => {
      const modelName = this.get('modelName');
      const baseUrl = this.get('baseUrl');
      if(modelName){
        this.get('store').query(modelName, this.get('queryOptions')).then((model) => {
          resolve(model);
        });
      }else{
        Ember.$.getJSON(baseUrl, this.get('queryOptions')).then((data) => {
          let model;
          const store = this.get('store');
          store.pushPayload(data);

          if(Array.isArray(data.data)){
            model = [];
            data.data.forEach((obj) => {
              model.push(store.peekRecord(obj.type, obj.id));
            });
          }else{
            model = store.peekRecord(data.type, data.id);
          }
          resolve(model);
        });
      }
    });
  },

  _beforeRequest(){
    const widget = this.get('widget');
    if(widget){
      widget.send('loading');
      this.set('loaded', false);
    }
  },

  _setModel(model){
    const widget = this.get('widget');
    this.setProperties({
      model: model,
      loaded: true,
      pageCount: model.meta['page-count'],
      recordCount: model.meta['record-count']
    });
    if(widget){
      widget.send('doneLoading');
    }
  },

  reloadModel(){
    this.set('model', undefined);
    this.fetchModel();
  },

  /* jshint ignore:start */
  _updateSearch(searchResult){
    const defaultFilterKeys = this.get('defaultFilterKeys');
    const filter = this.get('queryOptions.filter');

    if (!Object.keys(filter).length) {
      searchResult.forEach((newFilter) => {
        filter[newFilter.field] = newFilter.value;
      });
    } else {
      for(let oldFilter in filter){
        let found = 0;

        searchResult.forEach((newFilter) => {
          if(oldFilter === newFilter.field){
            found = 1;
            filter[oldFilter] = newFilter.value;
          }else{
            filter[newFilter.field] = newFilter.value;
          }
        });

        if(found === 0 &&  defaultFilterKeys.indexOf(oldFilter) === -1){
          delete filter[oldFilter];
        }
      }
    }
    this.set('queryOptions.filter', filter);
  },
  /* jshint ignore:end */

  searchPlaceholder: Ember.computed('modelFields', function () {
    const modelFields = this.get('modelFields');
    let placeholder = '';
    modelFields.forEach((field) => {
      if(field.search){
        placeholder += field.displayValue + ', ';
      }
    });

    return placeholder.substring(0, placeholder.length - 2);
  }),

  actions: {
    goToPage(page){
      this.set('queryOptions.page.number', page);
      this.fetchModel();
    },

    sort(sortedAttribute){
      if(this.get('queryOptions.sort') === sortedAttribute){
        this.set('queryOptions.sort', `-${sortedAttribute}`);
      }else{
        this.set('queryOptions.sort', sortedAttribute);
      }
      this.setProperties({
        'queryOptions.page.number': 1,
        model: undefined
      });
      this.fetchModel();
    },

    search(searchResult){
      this._updateSearch(searchResult);

      this.setProperties({
        'queryOptions.page.number': 1,
        'model': undefined
      });

      this.fetchModel();
    },

    clear(){
      this._updateSearch([]);
      this.setProperties({
        'queryOptions.page.number': 1,
        model: undefined
      });
      this.fetchModel();
    }
  }
});
