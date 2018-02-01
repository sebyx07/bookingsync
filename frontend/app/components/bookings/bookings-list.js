import Component from '@ember/component';
import GeneralList from '../../mixins/general-list';

export default Component.extend(GeneralList, {
  modelName: 'booking',
  init(){
    this.set('queryOptions', {
      page: {
        number: 1
      },
      filter: {
        'rental-id': this.get('rental.id')
      },
      sort: {}
    });
    this._super(...arguments);
  }
});
