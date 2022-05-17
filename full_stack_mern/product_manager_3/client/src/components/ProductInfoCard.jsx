import React from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const styles = {
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
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

const ProductInfoCard = ({ product }) => {
  const navigate = useNavigate();

  const handleDeleteButtonClick = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/api/products/delete/${product._id}`)
      .then(() => navigate("/"))
      .catch((err) => {
        alert("There was an error deleting this product:", err);
        console.log("There was an error deleting this product:", err);
      });
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="product-card" style={styles.div}>
      <h3>{product.title}</h3>
      <p>
        Price:{" "}
        {parseFloat(product.price).toLocaleString("en-IN", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
        })}
      </p>
      <p>Description: {product.description}</p>
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
      <button
        style={{ backgroundColor: "blue", ...styles.button }}
        onClick={handleBackClick}
      >
        {"<-"} Back
      </button>
    </div>
  );
};

export default ProductInfoCard;
