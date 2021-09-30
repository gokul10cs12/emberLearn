import Route from '@ember/routing/route';
import {inejct as service} from '@ember/service';
export default class ItemRoute extends Route {
  @service store;
  async model(param) {
    const { item_id } = param;

    const response = await fetch('/api/items.json');
    const { data } = await response.json();

    const productDetails = data.find(({ id }) => id === item_id);
    console.log(productDetails.colors);
    return productDetails;
  }
}
