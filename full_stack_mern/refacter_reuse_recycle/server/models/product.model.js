const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [1, "Title must have at least 1 character"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price can not go below zero"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [1, "Description must have at least 1 character"],
    },
  },
  { timestamps: true }
);

module.exports.Product = mongoose.model("Product", ProductSchema);
