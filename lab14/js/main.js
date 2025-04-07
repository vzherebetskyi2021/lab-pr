// Завдання 1
function Animal(name) {
 this.name = name;
}
Animal.prototype.speak = function () {
 console.log(this.name + " робить звук.");
};
function Dog(name, breed) {
 Animal.call(this, name);
 this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
 console.log(this.name + " гавкає.");
};
const myDog = new Dog("Будя", "Лабрадор");
myDog.speak();
myDog.bark();
// Завдання 2
function Product(name, price, category) {
 this.name = name;
 this.price = price;
 this.category = category;
}
function User(name) {
 this.name = name;
}
User.prototype.getInfo = function () {
 return `Ім'я користувача: ${this.name}`;
};
function Customer(name) {
 User.call(this, name);
 this.orders = [];
}
Customer.prototype = Object.create(User.prototype);
Customer.prototype.constructor = Customer;
Customer.prototype.viewOrders = function () {
 return this.orders;
};
Customer.prototype.addOrder = function (order) {
 this.orders.push(order);
};
function Order(products) {
 this.products = products;
 this.totalCost = this.calculateTotalCost();
}
Order.prototype.calculateTotalCost = function () {
 return this.products.reduce((total, product) => total + product.price, 0);
};
const product1 = new Product("Ноутбук", 15000, "Електроніка");
const product2 = new Product("Мишка", 500, "Аксесуари");
const customer = new Customer("Іван");
const order = new Order([product1, product2]);
customer.addOrder(order);
console.log(customer.getInfo());
console.log(customer.viewOrders());
console.log(`Загальна вартість замовлення: ${order.totalCost}`);