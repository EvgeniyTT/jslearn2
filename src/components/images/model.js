import Model from '../baseComponent/model';
import ImagesService from './service';

export default class ImagesModel extends Model {
  

  constructor() {
    super();
    console.log('IMAGES MODEL');
    ImagesService.fetchImages().then(images => { this.images = images });
  }

}