import React, { useState } from "react";
import Button from "./Button";

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
};

const ProductForm = ({
  onSubmit,
  children: buttonText,
  defaultValues = {},
}) => {
  const [title, setTitle] = useState(defaultValues["title"] || "");
  const [price, setPrice] = useState(defaultValues["price"] || 0);
  const [description, setDescription] = useState(
    defaultValues["description"] || ""
  );

  const handleSubmit = () => {
    onSubmit({ title, price, description });
    setTitle("");
    setPrice(0);
    setDescription("");
  };

  return (
    <form style={styles.form}>
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
      <Button style={{ marginTop: "4px" }} onClick={handleSubmit}>
        {buttonText}
      </Button>
    </form>
  );
};

export default ProductForm;
