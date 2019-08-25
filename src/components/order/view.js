class OrderView extends View {
  constructor(controller, rootNode) {
    super();
    this.controller = controller;
    this.rootNode = rootNode;
    this.template = $('.js-order-template').html();
    this.controller.addListener('onRenderDataChange', ({ renderData }) => { this.render(renderData); });
    this.controller.addListener('onHideOrder', () => { this.hideOrder(); });
    this.controller.addListener('onShowOrder', () => { this.showOrder(); });

    this.render(this.controller.renderData);

    this.hideOrder = this.hideOrder.bind(this);
    this.showOrder = this.showOrder.bind(this);
  }

  _initListeners() {
    this.selectors = {
      order: this.renderedTemplate.find('[name="order"]'),
    };
  }

  hideOrder() {
    this.selectors.order.hide();
  }

  showOrder() {
    this.selectors.order.show();
  }

}