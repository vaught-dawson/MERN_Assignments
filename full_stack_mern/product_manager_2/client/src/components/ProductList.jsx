import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const styles = {
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <div style={styles.div}>
      <h2>Products:</h2>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <Link to={`/${product._id}`} key={product._id}>
            {product.title}
          </Link>
        ))
      )}
    </div>
  );
};

export default ProductList;
