import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  store: inject(),
  toastr: inject(),
  modal: inject(),
  init(){
    this._super(...arguments);
    this.createNewRental();
  },

  actions: {
    save(){
      this.get('rental').save().then((rental) => {
        const list = this.get('list').toArray();
        list.unshift(rental);
        this.set('list', list);
        this.get('modal').hide();
        this.get('toastr.t').success('Rental Has Been Created');
        this.createNewRental();
      });
    }
  },

  createNewRental(){
    this.set('rental', this.get('store').createRecord('rental'));
  }
});
