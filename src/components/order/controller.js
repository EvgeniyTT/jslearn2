class OrderController extends Controller {
  constructor(data) {
    super();
    this._adapter = data.adapter;

    this.callbacks = {
      onRenderDataChange: [],
      onHideOrder: [],
      onShowOrder: []
    };

    this.renderData = { tableHeight: 0 };

    this.closeOrder = this.closeOrder.bind(this);
    this.createOrder = this.createOrder.bind(this);

    setTimeout(() => { this._initComponents() }, 0); // init components after view renders order template
  }

  _closeOrder(orderId) {
    return this._adapter.closeOrder(orderId)
      .then(res => this._adapter.checkResponse(res))
      .catch(console.error); // should be replaced with a real error handler
  }

  _createOrder(tableId) {
    return this._adapter.createOrder(tableId)
      .then(res => this._adapter.checkResponse(res))
      .catch(console.error); // should be replaced with a real error handler
  }

  _fetchActiveOrder(tableId) {
    return this._adapter.fetchActiveOrder(tableId)
      .then(res => this._adapter.checkResponse(res))
      .catch(console.error); // should be replaced with a real error handler
  }

  _initComponents() {
    this.billComponent = new Bill({
        data: { table: this.table },
        rootNode: $('[name="bill-placeholder"]')
    });

    this.menuComponent = new Menu({
        rootNode: $('[name="menu-placeholder"]'),
        handlers: { onPurchasesSubmitted: () => { this.billComponent.open(this.orderId); } }
    });

    this.tableComponent = new Table({
        data: { menuComponent: this.menuComponent},
        rootNode: $('[name="table-placeholder"]')
    });
  }

  _openOrder(orderId) {
        this.orderId = orderId;

        this._fireCallback('onShowOrder', {});

        this.billComponent.table = this.table;
        this.billComponent.open(this.orderId);
        this.menuComponent.orderId = this.orderId;
        this.menuComponent.open();
        this.tableComponent.open(this.table.chairsAmount);
  }

  closeOrder() {
    this._closeOrder(this.orderId)
      .then(() => {
        this.billComponent.createPdf(this.orderId);
        this._fireCallback('onHideOrder', {});
      });
  }

  createOrder() {
    this._createOrder(this.table.id)
      .then(orderId => { this._openOrder(orderId) });
  }

  open(table) {
    this.table = table
    this._fetchActiveOrder(table.id)
      .then(orders => {
          if(orders.length == 0) {
            this._fireCallback('onHideOrder', {})
          } else {
            this._openOrder(orders[0].id)
          }
      });
  }

}