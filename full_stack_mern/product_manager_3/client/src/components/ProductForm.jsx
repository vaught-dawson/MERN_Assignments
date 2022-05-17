import React, { useState } from "react";
import axios from "axios";

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "32px",
  },
  div: {
    width: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px",
    backgroundColor: "#f6f6f6",
    marginBottom: "8px",
  },
  button: {
    padding: "4px 16px",
    marginTop: "8px",
    backgroundColor: "#e6e6e6",
    border: "none",
  },
};

const ProductForm = ({ refresh }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/products/new", {
        title,
        price,
        description,
      })
      .then(() => {
        setTitle("");
        setPrice(0);
        setDescription("");
        refresh(true);
      })
      .catch((err) => {
        alert("There was an error posting the product to the server:", err);
        console.log(err);
      });
  };

  return (
    <form onSubmit={onSubmit} style={styles.form}>
      <div className="title" style={styles.div}>
        <label htmlFor="title">Title:</label>
        <input
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="price" style={styles.div}>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          value={price}
        />
      </div>
      <div className="description" style={styles.div}>
        <label htmlFor="descripion">Description:</label>
        <input
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <button style={styles.button}>Create</button>
    </form>
  );
};

export default ProductForm;
