import Route from '@ember/routing/route';

export default class ItemRoute extends Route {
  model(param) {
    const { item_id } = param;
    return item_id;
  }
}
