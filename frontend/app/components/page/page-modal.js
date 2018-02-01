import Component from '@ember/component';

export default Component.extend({
  actions: {
    open(){
      this.$('#page--page-modal').modal('show');
    }
  }
});
