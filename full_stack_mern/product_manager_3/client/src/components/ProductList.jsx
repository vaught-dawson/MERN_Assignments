import React from "react";
import ProductListRow from "./ProductListRow";

const styles = {
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

const ProductList = ({ products, refresh }) => {
  return (
    <div style={styles.div}>
      <h2>Products:</h2>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <ProductListRow
            key={product._id}
            product={product}
            refresh={refresh}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
