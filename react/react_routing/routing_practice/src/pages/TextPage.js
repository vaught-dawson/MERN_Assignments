import React from "react";
import { useParams } from "react-router-dom";

const TextPage = () => {
  const params = useParams();

  const styles = {
    color: params.color || "black",
    backgroundColor: params.backgroundColor || "white",
  };

  return <p style={styles}>{params.text}</p>;
};

export default TextPage;
