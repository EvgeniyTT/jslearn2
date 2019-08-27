import ImagesModel from './model';

export default class Images extends ImagesModel {
  constructor({ data = {}, parentElement, handlers = {} }) {
    console.log('In Images: ', parentElement);
    super({ data, parentElement });

    // Object.keys(handlers).forEach(event => {
    //   this.addListener(event, handlers[event]);
    // });
  }
};