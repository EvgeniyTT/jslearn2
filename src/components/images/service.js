import Service from '../baseComponent/service.js';

export default class ImagesService extends Service {
  constructor() {
    super();
    console.log('I am Image Service');
  }

  fetchImages() {
    return fetch('http://localhost:3000/images')
      .then(res => this.checkResponse(res))
      .catch(err => { console.error(err); }) ;
  }

}