import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UserRoute extends Route {
  @service store;
  async model() {
    let data = await this.store.findAll('user');
    console.log(data);

    return data;
  }
}
