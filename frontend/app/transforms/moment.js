import DS from "ember-data";
import moment from 'moment';
export default DS.Transform.extend({
  serialize: function(value) {
    if(this._isUndefined(value)) { return undefined; }
    value = this._moment(value);
    return value.format();
  },

  deserialize: function(value) {
    if(this._isUndefined(value)) { return undefined; }
    return this._moment(value);
  },

  _isUndefined: function(value) {
    return value === undefined || value === null;
  },

  _moment: function(value){
    return moment(value);
  }
});
