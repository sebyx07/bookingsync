import Service from '@ember/service';

export default Service.extend({
  show(){
    this.modal().modal('show');
  },
  hide(){
    this.modal().modal('hide');
  },
  modal(){
    return window.$('#page--page-modal');
  }
});
