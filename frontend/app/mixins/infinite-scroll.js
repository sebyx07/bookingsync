import Ember from 'ember';

export default Ember.Mixin.create({
  didInsertElement(){
    this._super(...arguments);
    this.watchScroll();
  },

  _selector(){
    const globalSelector = this.get('infiniteScrollSelector.global');
    let selector;
    if(globalSelector){
      selector = Ember.$(this.get('infiniteScrollSelector.element'));
    }else{
      selector = this.$(this.get('infiniteScrollSelector.element'));
    }
    return selector;
  },

  watchScroll(){
    const selector = this._selector();

    selector.bind('scroll', () => {
      const currentPosition = $(window).scrollTop() + $(window).innerHeight();
      const height = $(document).height();
      if(currentPosition >= height && this.get('hasMoreToLoad')){
        this.send('goToPage', this.get('queryOptions.page.number') + 1);
      }
    });
  },

  hasMoreToLoad: Ember.computed('queryOptions.page.number', 'pageCount', function(){
    const currentPage = this.get('queryOptions.page.number');
    const maxPages = this.get('pageCount');
    return currentPage < maxPages;
  }),

  _setModel(model){
    const currentModel = this.get('model');
    if (currentModel) {
      model.forEach((record) => {
        currentModel.pushObject(record._internalModel);
      });
    } else {
      this.set('model', model);
    }
    this.setProperties({
      loaded: true,
      pageCount: model.meta['page-count'],
      recordCount: model.meta['record-count']
    });
  },

  willDestroyElement(){
    this._super(...arguments);
    const selector = this._selector();
    selector.unbind('scroll')
  }
});
