class Controller {
  // PRIVAT METHODS
  _fireCallback(methodName, payload) {
    if (Array.isArray(this.callbacks[methodName])) {
      this.callbacks[methodName].forEach(callback => {
        try {
          callback(payload);
        } catch (e) { console.error(e); } // should be replaced with a real error handler
      });
    }
  }

  // PUBLIC METHODS
  addListener(functionName, handler) {
    if (functionName in this.callbacks) {
      this.callbacks[functionName].push(handler);
    } else {
      this.callbacks[functionName] = [handler];
    }
  }

  removeComponent() {
    this._fireCallback('onRemoveComponent', {});
  }

  // GETTERS & SETTERS
  get renderData() {
    return this._renderData;
  }

  set renderData(renderData) {
    this._renderData = { ...this.renderData, ...renderData };
  }
}