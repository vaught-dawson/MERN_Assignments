const Cards = require("./classes/cards");

const redNinja = new Cards.RedBeltNinja();
const algoEffect = new Cards.HardAlgorithm();
algoEffect.play(redNinja);

const blackNinja = new Cards.BlackBeltNinja();
const promiseEffect = new Cards.UnhandledPromiseRejection();
promiseEffect.play(redNinja);

const pairEffect = new Cards.PairProgramming();
pairEffect.play(redNinja);

redNinja.attack(blackNinja);
