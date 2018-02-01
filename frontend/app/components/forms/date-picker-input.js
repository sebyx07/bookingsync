import TextField from '@ember/component/text-field';
import {
  observer
} from '@ember/object';

export default TextField.extend({
  didInsertElement(){
    this._super(...arguments);
    if(this.get('value')){
      this.datePicker().date(this.get('value'));
    }else{
      this.datePicker();
    }
  },

  datePicker(){
    return this.$().datetimepicker().data('DateTimePicker');
  },

  valueObserver: observer('value', function () {
    setTimeout(() => {
      this.datePicker().date(this.get('value'));
    }, 10);
  })
});
