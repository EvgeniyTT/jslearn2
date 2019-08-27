import ImagesModel from './model';
import ImagesController from './controller';

export default class Images {
  constructor({data = {}, parentElement, callbacks = {}}) {
    const model = new ImagesModel({data, parentElement});
    new ImagesController({model, callbacks});
  }
};
