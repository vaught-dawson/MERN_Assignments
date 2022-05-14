const mongoose = require("mongoose");

const JokeSchema = mongoose.Schema({
  setup: {
    type: String,
    required: [true, "Setup is required"],
    minlength: [10, "Setup must be at least 10 characters"],
  },
  punchline: {
    type: String,
    required: [true, "Punchline is required"],
    minlength: [3, "Setup must be at least 3 characters"],
  },
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
