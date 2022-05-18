const { Author } = require("../models/author.model");

const index = (req, res) =>
  res.json({
    message:
      "This is the API; Look at the documentation to learn how to use it!",
  });

const findAll = (req, res) => {
  Author.find()
    .then((authors) => res.json({ authors }))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", error: err })
    );
};

const findOne = (req, res) => {
  Author.findById(req.params.id)
    .then((author) => res.json({ author }))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", error: err })
    );
};

const create = (req, res) => {
  const { name } = req.body;
  Author.create({ name })
    .then((author) => res.json(author))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", error: err })
    );
};

const update = (req, res) => {
  const updatedFieldData = req.body;
  Author.findOneAndUpdate({ _id: req.params.id }, updatedFieldData, {
    new: true,
    runValidators: true,
  })
    .then((author) => res.json({ author }))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", error: err })
    );
};

const deleteOne = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result }))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", error: err })
    );
};

module.exports = {
  index,
  findOne,
  findAll,
  create,
  update,
  deleteOne,
};
