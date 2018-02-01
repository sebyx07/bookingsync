import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  store: inject(),
  toastr: inject(),
  modal: inject(),
  didInsertElement(){
    this._super(...arguments);
    this.createNewBooking();
  },

  actions: {
    save(){
      const toastr = this.get('toastr.t');

      this.get('booking').save().then((booking) => {
        const list = this.get('list').toArray();
        list.unshift(booking);
        this.set('list', list);
        this.get('modal').hide();
        toastr.success('Booking Has Been Created');
        this.createNewBooking();
      }).catch((data) => {
        let errors = [];
        data.errors.forEach((err) => {
          const message = `<div>${err.detail.replace('-', ' ')}</div>`;
          errors.push(message);
        });

        toastr.error(errors.join(''));
      });
    }
  },

  createNewBooking(){
    this.set('booking', this.get('store').createRecord('booking', {rental: this.get('rental')}));
  }
});
