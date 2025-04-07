import { Product } from "./models/Product.js";
import { Customer } from "./models/Customer.js";
import { Order } from "./models/Order.js";

const product1 = new Product("Laptop", 1000, "Electronics");
const product2 = new Product("Mouse", 50, "Accessories");

const customer = new Customer("John Doe");
const order = new Order();

order.addProduct(product1);
order.addProduct(product2);

customer.addOrder(order);

console.log(customer.getUserInfo());
console.log(customer.viewOrders());
