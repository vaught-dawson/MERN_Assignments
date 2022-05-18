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
  const [refresh, refreshProducts] = useState(true);

  useEffect(() => {
    if (!refresh) return;

    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) =>
        console.log(
          "Something went horribly wrong with the database request:",
          err
        )
      );

    refreshProducts(false);
  }, [refresh]);

  const onFormSubmit = (values) => {
    axios
      .post("http://localhost:5000/api/products/new", { ...values })
      .then(() => {
        refreshProducts(true);
      })
      .catch((err) => {
        alert("There was an error posting the product to the server:", err);
        console.log(err);
      });
  };

  return (
    <>
      <ProductForm onSubmit={onFormSubmit}>Add Product</ProductForm>
      <hr style={styles.hr} />
      <ProductList refresh={refreshProducts} products={products} />
    </>
  );
};

export default Main;
