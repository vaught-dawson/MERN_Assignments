import axios from "axios";
import React from "react";
import Button from "./Button";

const ProductDeleteButton = ({ productId, callback = () => {} }) => {
  const handleButtonClick = () => {
    axios
      .delete(`http://localhost:5000/api/products/delete/${productId}`)
      .then(() => callback())
      .catch((err) => {
        alert("There was an error deleting this product:", err);
        console.log("There was an error deleting this product:", err);
      });
  };

  return (
    <Button
      onClick={handleButtonClick}
      style={{ color: "white", backgroundColor: "red", marginLeft: "4px" }}
    >
      Delete
    </Button>
  );
};

export default ProductDeleteButton;
