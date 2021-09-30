import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
class Item {
  @tracked count;
  name;
  color;
  image;
  price;

  constructor(item) {
    this.count = item.count;
    this.name = item.name;
    this.color = item.color;
    this.image = item.image;
    this.price = item.price;
  }
}

export default class ShoppingCartService extends Service {
  @tracked itemList = [];

  addItem(item) {
    // this.itemList.push(item);
    /*
      alternate way to add the content to list
    * */

    const itemExist = this.itemList.find(({ name, color }) => {
      return name === item.name && color === item.color;
    });

    if (itemExist) {
      itemExist.count += 1;
    } else {
      this.itemList = [
        ...this.itemList,
        new Item({
          ...item,
          count: 1,
        }),
      ];
    }
    console.log(this.itemList);
  }
}
