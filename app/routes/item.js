import Route from '@ember/routing/route';
import {products} from '../data/products'
export default class ItemRoute extends Route {
  model(param) {
    const { item_id } = param;

    const productDetails = products.find( ({id}) => id === item_id ) ;
    console.log(productDetails);
    return item_id;
   }
}
