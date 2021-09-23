import Route from '@ember/routing/route';
import { prod0ucts } from '../data/products';
export default class IndexRoute extends Route {
  model() {
    return products;
  }
}
