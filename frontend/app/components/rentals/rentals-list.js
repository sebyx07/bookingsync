import Component from '@ember/component';
import GeneralList from '../../mixins/general-list';

export default Component.extend(GeneralList, {
  modelName: 'rental'
});
