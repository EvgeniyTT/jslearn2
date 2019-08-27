import Model from '../baseComponent/model';
import ImagesService from './service';
import template from './template.html';

import Image from '../image';

export default class ImagesModel extends Model {
  constructor({parentElement}) {
    super({parentElement, template});
    const data = {imagesTemplateName: 'images-template'};

    this.render(data);

    ImagesService.fetchImages().then((images) => {
      images.forEach((image) => {
        new Image({
          parentElement: data.imagesTemplateName,
          data: image,
          callbacks: {
            onImageClick: (message) => {
              console.log(message);
            },
          },
        });
      });
    });
  }
}
