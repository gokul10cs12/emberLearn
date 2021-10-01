import Route from '@ember/routing/route';
export default class ItemRoute extends Route {
  // @service store;
  async model(param) {
    const { item_id } = param;

    const data = await this.store.findAll('product');
    const productDetails = data.find(({ id }) => id === item_id);

    return productDetails;
  }
}
