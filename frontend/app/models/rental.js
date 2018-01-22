import DS from 'ember-data';

export default DS.Model.extend({
  bookings: DS.hasMany('booking'),
  name: DS.attr('string'),
  dailyRate: DS.attr('number')
});
