const Effect = require("../util/Effect");

module.exports = class UnhandledPromiseRejection extends Effect {
  constructor() {
    super("Unhandled Promise Rejection", 1, "resilience", -2);
  }
};
