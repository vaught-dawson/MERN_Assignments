import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const styles = {
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "20%",
    backgroundColor: "#f6f6f6",
    padding: "4px",
    margin: "4px",
  },
  button: {
    padding: "4px 16px",
    cursor: "pointer",
    border: "none",
    color: "white",
    fontSize: "1em",
    marginLeft: "4px",
    textDecoration: "none",
    borderRadius: "2px",
  },
};

const ProductListRow = ({ product, refresh }) => {
  const handleDeleteButtonClick = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/api/products/delete/${product._id}`)
      .then(() => refresh(true))
      .catch((err) => {
        alert("There was an error deleting this product:", err);
        console.log("There was an error deleting this product:", err);
      });
  };

  return (
    <div style={styles.div}>
      <Link to={`/${product._id}`}>{product.title}</Link>
      <div className="options">
        <Link
          to={`/${product._id}/edit`}
          style={{ backgroundColor: "blue", ...styles.button }}
        >
          Edit
        </Link>
        <button
          onClick={handleDeleteButtonClick}
          style={{ backgroundColor: "red", ...styles.button }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductListRow;
