import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
    backgroundColor: "#e6e6e6",
    border: "none",
  },
};

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data.product);
      })
      .catch((err) => {
        setProduct("Error getting that item:", err);
      });
  }, [id]);

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <>
      {product !== null && (
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
          <button style={styles.button} onClick={handleBackClick}>
            {"<-"} Back
          </button>
        </div>
      )}
    </>
  );
};

export default ProductPage;
