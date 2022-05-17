import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductEditCard from "../components/ProductEditCard";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

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

  return <>{product !== null && <ProductEditCard product={product} />}</>;
};

export default ProductPage;
