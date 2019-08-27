export default class Controller {
  constructor(callbacks = {}) {
    this.callbacks = {};
    this.addCallbacks(callbacks);
  }

  // PRIVAT METHODS
  _cleanup() {
    this.selectors = null;
    if (this.model.node) this.model.node.remove();
  }

  _fireCallback(methodName, payload) {
    if (Array.isArray(this.callbacks[methodName])) {
      this.callbacks[methodName].forEach((callback) => {
        try {
          callback(payload);
        } catch (e) {
          console.error(e);
        }
      });
    }
  }

  _initListeners() {}

  // PUBLIC METHODS
  addCallback(callbackName, handler) {
    if (callbackName in this.callbacks) {
      this.callbacks[callbackName].push(handler);
    } else {
      this.callbacks[callbackName] = [handler];
    }
  }

  addCallbacks(callbacks) {
    Object.keys(callbacks).forEach((event) => {
      this.addCallback(event, callbacks[event]);
    });
  }

  removeComponent() {
    this._fireCallback('onRemoveComponent', {});
  }
}
