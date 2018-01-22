import DS from 'ember-data';

export default DS.Model.extend({
  rental: DS.belongsTo('rental'),

  startAt: DS.attr('moment'),
  endAt: DS.attr('moment'),
  clientEmail: DS.attr('string'),
  price: DS.attr('number')
});
