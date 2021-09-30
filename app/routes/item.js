import Route from '@ember/routing/route';
export default class ItemRoute extends Route {
  async model(param) {
    const { item_id } = param;

    const { data } = this.store.findAll('product');
    console.log(data);
    const productDetails = data.find(({ id }) => id === item_id);
    console.log(productDetails.colors);
    return productDetails;
  }
}
