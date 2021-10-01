import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class IndexRoute extends Route {
  @service store;

  async model() {
    let data = this.store.findAll('product');
    console.log('data', data);
    return data;
  }
}
