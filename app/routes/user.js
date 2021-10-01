import Route from '@ember/routing/route';

export default class UserRoute extends Route {
  model(){
    return this.store.findAll("product");
  }
}
