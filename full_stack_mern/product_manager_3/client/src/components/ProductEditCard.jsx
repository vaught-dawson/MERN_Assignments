import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  main: {
    marginTop: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    width: "20%",
    marginLeft: "40%",
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
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

const ProductEditCard = ({ product }) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const navigate = useNavigate();

  const handleEditClick = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/products/update/${product._id}`, {
        title,
        price,
        description,
      })
      .then(() => navigate(`/${product._id}`))
      .catch((err) => {
        alert("There was an error editing this product:", err);
        console.log("There was an error editing this product:", err);
      });
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="product-card" style={styles.main}>
      <div className="title" style={styles.row}>
        <label htmlFor="title">Title:</label>
        <input onChange={(e) => setTitle(e.target.value)} value={title} />
      </div>
      <div className="price" style={styles.row}>
        <label htmlFor="price">Price:</label>
        <input
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <div className="description" style={styles.row}>
        <label htmlFor="description">Description:</label>
        <input
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <button
        style={{ backgroundColor: "blue", ...styles.button }}
        onClick={handleEditClick}
      >
        Submit Edit
      </button>
      <button
        style={{ backgroundColor: "blue", ...styles.button }}
        onClick={handleBackClick}
      >
        {"<-"} Back
      </button>
    </div>
  );
};

export default ProductEditCard;
