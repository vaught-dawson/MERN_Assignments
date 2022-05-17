import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const styles = {
  hr: {
    width: "60%",
    marginLeft: "20%",
    marginTop: "16px",
    marginBottom: "16px",
  },
};

const Main = () => {
  const [products, setProducts] = useState([]);
  const [refresh, refreshProducts] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      setProducts(res.data.products);
    });
  }, [refresh]);

  return (
    <>
      <ProductForm refresh={refreshProducts} />
      <hr style={styles.hr} />
      <ProductList refresh={refreshProducts} products={products} />
    </>
  );
};

export default Main;
