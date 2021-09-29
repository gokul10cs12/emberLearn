import Route from '@ember/routing/route';
export default class ItemRoute extends Route {
  async model(param) {
    const { item_id } = param;

    const response = await fetch('/api/items.json');
    const { data } = await response.json();

    const productDetails = data.find(({ id }) => id === item_id);
    console.log(productDetails.colors);
    return productDetails;
  }
}
