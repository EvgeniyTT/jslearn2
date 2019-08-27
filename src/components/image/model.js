import Model from '../baseComponent/model';
import template from './template.html';

export default class ImageModel extends Model {
  constructor({parentElement, data}) {
    super({parentElement, template});
    this.render(data);
  }
};
