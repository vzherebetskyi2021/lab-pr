export class User {
  constructor(name) {
    this.name = name;
  }

  getUserInfo() {
    return `User: ${this.name}`;
  }
}
