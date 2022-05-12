const { faker } = require("@faker-js/faker");

class User {
  constructor() {
    const fakerInternet = faker.internet;
    const fakerName = faker.name;
    this.password = fakerInternet.password();
    this.phoneNumber = faker.phone.phoneNumber("(###) ###-####");
    this.lastName = fakerName.lastName(fakerName.gender());
    this.firstName = fakerName.firstName(fakerName.gender());
    this.email = fakerInternet.email(this.firstName, this.lastName);
    this._id = faker.random.numeric(5, {}, false);
  }
}

module.exports = User;
