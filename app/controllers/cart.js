import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class CartController extends Controller {
  @service('shopping-cart') cartItem;

  get tax() {
    return 0.09 * this.subtotal;
  }

  get total() {
    return this.subtotal + this.tax;
  }

  get subtotal() {
    return this.cartItem.itemList.reduce((acc, item) => {
      return acc + item.price * item.count;
    },0);
  }
 @action
  updateItemCount(item, event){
    const count = event.target.value;
    item.count = count;
    if (count >= 1) {
      item.count = count;
    } else {
      item.count = 0;
    }
  }
}
