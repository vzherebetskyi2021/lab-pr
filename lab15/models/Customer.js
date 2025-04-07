import { User } from "./User.js";
import { Order } from "./Order.js";

export class Customer extends User {
  constructor(name) {
    super(name);
    this.orders = [];
  }

  addOrder(order) {
    if (order instanceof Order) {
      this.orders.push(order);
      console.log(`Order added for ${this.name}`);
    } else {
      console.log("Invalid order");
    }
  }

  viewOrders() {
    return this.orders
      .map((order, index) => `Order ${index + 1}: ${order.getTotal()}`)
      .join("\n");
  }
}
