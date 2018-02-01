import Mixin from '@ember/object/mixin';
import DataComponent from './data-component';
import InfiniteScroll from './infinite-scroll';

export default Mixin.create(DataComponent, InfiniteScroll, {
  infiniteScrollSelector: {
    element: 'ul'
  }
});
