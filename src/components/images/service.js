import Service from '../baseComponent/service.js';
import {API_URL, IMAGES_ENDPOINT} from '../../const';

export default class ImagesService extends Service {
  constructor() {
    super();
  }

  static fetchImages() {
    return fetch(`${API_URL}${IMAGES_ENDPOINT}`)
        .then((res) => this.checkResponse(res))
        .catch((err) => {
          console.error(err);
        });
  }
}
