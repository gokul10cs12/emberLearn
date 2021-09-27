import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class ShoppingCartService extends Service {
  @tracked itemList = [];

  addItem(item) {
    // this.itemList.push(item);
    /*
      alternate way to add the content to list
    * */
    this.itemList = [...this.itemList, item];
    console.log('Gokul', this.itemList);
  }
}
