import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  toastr: inject(),
  classNames: ['list-group-item'],

  actions: {
    delete(){
      const booking = this.get('booking');
      booking.destroyRecord().then(() => {
        this.get('toastr.t').success('Booking Has Been Deleted!');
      });
    }
  }
});
