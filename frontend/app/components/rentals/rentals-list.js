import Component from '@ember/component';
import DataComponent from '../../mixins/data-component';
import InfiniteScroll from '../../mixins/infinite-scroll';

export default Component.extend(DataComponent, InfiniteScroll, {
  modelName: 'rental'
});
