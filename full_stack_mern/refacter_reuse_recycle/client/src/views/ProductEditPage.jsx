import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import ProductForm from "../components/ProductForm";

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

  const onFormSubmit = (values) => {
    axios
      .put(`http://localhost:5000/api/products/update/${product._id}`, {
        ...values,
      })
      .then(() => navigate(`/${product._id}`))
      .catch((err) => {
        alert("There was an error editing this product:", err);
        console.log("There was an error editing this product:", err);
      });
  };

  return (
    <>
      {product !== null && (
        <>
          <BackButton style={{ margin: "8px" }} />
          <ProductForm onSubmit={onFormSubmit} defaultValues={product}>
            Update Product
          </ProductForm>
        </>
      )}
    </>
  );
};

export default ProductPage;
