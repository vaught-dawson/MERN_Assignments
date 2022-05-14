const Joke = require("../models/joke.model");

const findAllJokes = (req, res) => {
  Joke.find()
    .then((allJokes) => res.json({ jokes: allJokes }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

const findOneJoke = (req, res) => {
  Joke.findById(req.params.id)
    .then((oneJoke) => res.json({ joke: oneJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

const createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then((newJoke) => res.json({ joke: newJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

const updateJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedJoke) => res.json({ joke: updatedJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

const deleteJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

const randomJoke = (req, res) => {
  Joke.count()
    .then((count) => {
      let rand = Math.floor(Math.random() * count);
      Joke.findOne()
        .skip(rand)
        .then((randJoke) => res.json({ joke: randJoke }));
    })
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports = {
  findAllJokes: findAllJokes,
  findOneJoke: findOneJoke,
  createNewJoke: createNewJoke,
  updateJoke: updateJoke,
  deleteJoke: deleteJoke,
  randomJoke: randomJoke,
};
