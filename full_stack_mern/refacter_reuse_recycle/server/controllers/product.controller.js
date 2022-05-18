const { Product } = require("../models/product.model");

const index = (req, res) =>
  res.json({
    message:
      "This is the API; Look at the documentation to learn how to use it!",
  });

const findAllProducts = (req, res) => {
  Product.find()
    .then((products) => res.json({ products }))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", error: err })
    );
};

const findOneProduct = (req, res) => {
  Product.findById(req.params.id)
    .then((product) => res.json({ product }))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", error: err })
    );
};

const createProduct = (req, res) => {
  const { title, price, description } = req.body;
  Product.create({
    title,
    price,
    description,
  })
    .then((product) => res.json(product))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", error: err })
    );
};

const updateProduct = (req, res) => {
  const updatedFieldData = req.body;
  Product.findOneAndUpdate({ _id: req.params.id }, updatedFieldData, {
    new: true,
    runValidators: true,
  })
    .then((product) => res.json({ product }))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", error: err })
    );
};

const deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result }))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", error: err })
    );
};

module.exports = {
  index,
  findOneProduct,
  findAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
