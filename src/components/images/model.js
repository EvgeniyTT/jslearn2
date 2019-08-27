import mustache from 'mustache';

import Model from '../baseComponent/model';
import ImagesService from './service';
import template from './template.html';

import Image from '../image';

export default class ImagesModel extends Model {
  constructor({ parentElement }) {
    super();
    const data = { imagesTemplateName: 'images-template' }

    this.render({ data, parentElement });

    ImagesService.fetchImages().then(images => { 
      console.log('images: ', images);
      this.images = images;
      images.forEach(image => {
        new Image({
          parentElement: data.imagesTemplateName,
          data: image
        })
      });
    });
  }

  render({ data, parentElement }) {
    const output = mustache.render(template, data);
    document.querySelector(`[data-parent = ${parentElement}]`).insertAdjacentHTML('beforeend', output);
  }

}