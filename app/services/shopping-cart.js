import Service from '@ember/service';

export default class ShoppingCartService extends Service {
  itemList = [{ name: '1' }, { name: '2' }];

  addItem(item){
    // this.itemList.push(item);
    /*
      alternate way to add the content to list
    * */
    this.itemList = [...this.itemList, item];
    console.log("Gokul", this.itemList);
  }
}
