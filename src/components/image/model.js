import mustache from 'mustache';

import Model from '../baseComponent/model';
import template from './template.html';

import Image from '../image';
export default class ImageModel extends Model {
  constructor({ parentElement, data }) {
    super();
    this.render({ data, parentElement });
  }

  render({ data, parentElement }) {
    const output = mustache.render(template, data);
    document.querySelector(`[data-parent = ${parentElement}]`).insertAdjacentHTML('beforeend', output);
  }
};