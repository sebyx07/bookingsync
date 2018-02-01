import Component from '@ember/component';

export default Component.extend({
  toastr: Ember.inject.service(),
  didInsertElement(){
    this.$('input').focusout(() => {
      if(this.get('model.hasDirtyAttributes')){
        this.save();
      }
    });
  },

  save(){
    const toastr = this.get('toastr.t');
    this.get('model').save().then(() => {
      toastr.success('Saved!');
    }).catch((data) => {
      let errors = [];
      data.errors.forEach((err) => {
        const message = `<div>${err.detail.replace('-', ' ')}</div>`;
        errors.push(message);
      });

      toastr.error(errors.join(''));
    });
  }
});
