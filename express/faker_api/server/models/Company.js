const { faker } = require("@faker-js/faker");

class Company {
  constructor() {
    this._id = faker.random.numeric(5, {}, false);
    this.name = faker.company.companyName();
    this.address = {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      country: faker.address.country(),
    };
    this.address.zipcode = faker.address.zipCodeByState(this.address.state);
  }
}

module.exports = Company;
