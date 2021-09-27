import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ItemController extends Controller {
  @tracked color = this.model.colors[0].color;
  @tracked zoomImage = false;
  get imageName() {
    return this.model.colors.find(({ color }) => color === this.color).image;
  }

  @action
  changeColor(color) {
    this.color = color;
  }

  @action
  toggleZoom() {
    this.zoomImage = !this.zoomImage;
  }
}
