import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  router: inject('-routing'),
  toastr: inject(),
  tagName: 'li',
  classNames: ['list-group-item row'],
  actions: {
    delete(){
      const rental = this.get('rental');
      rental.destroyRecord().then(() => {
        this.get('toastr.t').success('Rental Has Been Deleted!');
      });
    }
  }
});
