class Ninja {
  constructor(name, health = 0) {
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }

  sayName() {
    console.log(`My name is ${this.name}!`);
  }

  showStats() {
    console.log(
      `Name: ${this.name} | Strength: ${this.strength} | Speed: ${this.speed} | Health: ${this.health}`
    );
  }

  drinkSake() {
    this.health += 10;
    console.log(`${this.name}: Ahh, that hit the spot~`);
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

module.export.Ninja = Ninja;
