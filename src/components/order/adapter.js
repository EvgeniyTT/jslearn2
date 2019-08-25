class OrderAdapter extends Adapter {
  static fetchActiveOrder(tableId) {
    return fetch(`/activeOrder?tableId=${tableId}`);
  }

  static createOrder(tableId) {
    return fetch('/orders', {
      method: 'post',
      body: JSON.stringify({ tableId })
    })
  }

  static closeOrder(orderId) {
    return fetch('/orders', {
      method: 'put',
      body: JSON.stringify({ orderId })
    })
  }
}