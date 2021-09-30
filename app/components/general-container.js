import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class GeneralContainerComponent extends Component {
  @service shoppingCart;

  get itemCount() {
    let items = 0;
    this.shoppingCart.itemList.forEach((item) => {
      console.log(item.count);
      items += item.count;
    });
    return items;
  }
}
