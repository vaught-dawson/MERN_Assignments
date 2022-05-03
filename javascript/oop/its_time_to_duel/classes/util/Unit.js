const Card = require("./Card.js");

module.exports = class Unit extends Card {
  constructor(name, cost, power, resilience) {
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
  }

  attack(target) {
    if (!target instanceof Unit) {
      throw new Error("Target must be a unit!");
    }
    target.resilience -= this.power;
    console.log(
      `${this.name} has attacked ${target.name} lowering their resilience by ${this.power} to ${target.resilience}!`
    );
  }
};
