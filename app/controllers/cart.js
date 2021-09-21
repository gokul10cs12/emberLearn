import Controller from '@ember/controller';

export default class CartController extends Controller {
  // subtotal = 12;
  // tax = 15;
  // total = 0;

  get tax() {
    return 0.09 * this.subtotal;
  }

  get total() {
    return this.subtotal + this.tax;
  }

  get subtotal() {
    return this.model.reduce((acc, item) => {
      console.log('a=', acc, 'b=', item);
      return acc + item.price;
    }, 0);
  }
}
