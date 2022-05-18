import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
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
  const navigate = useNavigate();

  return (
    <div style={styles.div}>
      <Button
        onClick={() => navigate(`/${product._id}`)}
        style={{
          backgroundColor: "transparent",
          textDecoration: "underline",
        }}
      >
        {product.title}
      </Button>
      <div className="options">
        <Button
          onClick={() => navigate(`/${product._id}/edit`)}
          style={{ backgroundColor: "blue", color: "white" }}
        >
          Edit
        </Button>
        <ProductDeleteButton
          productId={product._id}
          callback={() => refresh(true)}
        />
      </div>
    </div>
  );
};

export default ProductListRow;
