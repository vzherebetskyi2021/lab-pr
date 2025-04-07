export class Order {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotal() {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
}
