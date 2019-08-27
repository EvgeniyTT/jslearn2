import Controller from '../baseComponent/controller';

export default class ImageController extends Controller {
  constructor({model, callbacks}) {
    super(callbacks);
    this._initListeners(model.node);
  }

  _initListeners(node) {
    const selectors = {
      image: node.querySelector('img'),
    };

    selectors.image.addEventListener('click', () => {
      console.log('do something');
      this._fireCallback('onImageClick', 'message from image');
    });
  }
};

