import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    this.store.findRecord('rental', params.id, {include: 'bookings'});
  }
});
