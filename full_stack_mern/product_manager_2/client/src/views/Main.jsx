import React from "react";
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
  return (
    <>
      <ProductForm />
      <hr style={styles.hr} />
      <ProductList />
    </>
  );
};

export default Main;
