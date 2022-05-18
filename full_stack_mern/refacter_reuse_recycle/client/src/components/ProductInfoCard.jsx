import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import BackButton from "./BackButton";
import ProductDeleteButton from "./ProductDeleteButton";

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

  return (
    <>
      <BackButton style={{ margin: "8px" }} />
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
          <Button
            onClick={() => navigate(`/${product._id}/edit`)}
            style={{ backgroundColor: "blue", color: "white" }}
          >
            Edit
          </Button>
          <ProductDeleteButton
            productId={product._id}
            callback={() => navigate("/")}
          />
        </div>
      </div>
    </>
  );
};

export default ProductInfoCard;
