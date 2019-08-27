import mustache from 'mustache';

export default class Model {
  constructor({parentElement, template}) {
    this.template = template;
    this.parentElement = parentElement;
  }

  render(data) {
    const placeholder = document.createElement('div');
    placeholder.insertAdjacentHTML(
        'afterbegin',
        mustache.render(this.template, data)
    );
    this.node = placeholder.firstElementChild;

    document
        .querySelector(`[data-parent = ${this.parentElement}]`)
        .insertAdjacentElement('beforeend', this.node);
  }
}
