import ImageModel from './model';

export default class Images extends ImageModel {
  constructor({ data = {}, parentElement, handlers = {} }) {
    super({ data, parentElement });
  }
};