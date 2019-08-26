export default class Controller {
  // PRIVAT METHODS
  _cleanup() {
    this.selectors = null;
    if (this.renderedTemplate) this.renderedTemplate.remove();
  }

  _initListeners() {}

  _renderTemplate(renderData, options = {}) {
    this.renderedTemplate = $(Mustache.render(this.template, renderData));
    if (options.isAppend) {
      this.rootNode.append(this.renderedTemplate);
    } else if (options.isPrepend) {
      this.rootNode.prepend(this.renderedTemplate);
    } else if (options.insertAfter) {
      this.renderedTemplate.insertAfter(options.insertAfter);
    } else {
      this.rootNode.html(this.renderedTemplate);
    }
  }

  // PUBLIC METHODS
  render(renderData, options) {
    this._renderTemplate(renderData, options);
    this._initListeners();
  }
}