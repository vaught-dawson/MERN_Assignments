import React from "react";
import { Link } from "react-router-dom";
import ProductDeleteButton from "./ProductDeleteButton";

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
        <ProductDeleteButton
          productId={product._id}
          callback={() => refresh(true)}
        />
      </div>
    </div>
  );
};

export default ProductListRow;
