class Order extends OrderController {
  constructor({ data = {}, rootNode, handlers = {} }) {
    super({ ...data, service: OrderService});
    let view = new OrderView(this, rootNode);
    Object.keys(handlers).forEach(event => {
      this.addListener(event, handlers[event]);
    });
  }
}