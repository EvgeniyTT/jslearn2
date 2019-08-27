import ImageModel from './model';
import ImageController from './controller';

export default class Images {
  constructor({data = {}, parentElement, callbacks = {}}) {
    const model = new ImageModel({data, parentElement});
    new ImageController({model, callbacks});
  }
};
