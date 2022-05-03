const Card = require("./Card");
const Unit = require("./Unit");

module.exports = class Effect extends Card {
  constructor(name, cost, stat, magnitude) {
    super(name, cost);
    this.stat = stat;
    this.magnitude = magnitude;
    this.text = `${
      magnitude < 0 ? "Lower" : "Raise"
    } the target's ${stat} by ${Math.abs(magnitude)}`;
  }

  play(target) {
    if (!target instanceof Unit) {
      throw new Error("Target must be a unit!");
    }
    target[this.stat] += this.magnitude;
    console.log(`${this.name} has been used on ${target.name}!`);
    console.log(
      `${target.name}'s ${this.stat} has been ${
        this.magnitude < 0 ? "lowered" : "raised"
      } by ${Math.abs(this.magnitude)} totalling ${target[this.stat]}\n`
    );
  }
};
