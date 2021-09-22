import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ItemController extends Controller {
  @tracked color = "red";

  get imageName() {
    let path = `/asset/images/beats-solo-${this.color}.png`;
    return path;
  }

  @action
  changeColor(color) {
    this.color = color;
    console.log('color now:', color);
  }
}
