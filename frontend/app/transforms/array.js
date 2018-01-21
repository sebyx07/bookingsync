import Ember from 'ember';
import DS from 'ember-data';

const toArray = (data) => {
  switch(Ember.typeOf(data)) {
    case 'array':
      return data;
    case 'string':
      return JSON.parse(data);
    default:
      return [];
  }
};

export default DS.Transform.extend({
  deserialize: toArray,
  serialize: toArray
});
