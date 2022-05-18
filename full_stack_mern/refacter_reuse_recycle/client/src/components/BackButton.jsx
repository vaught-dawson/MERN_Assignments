import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const BackButton = ({ style }) => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate(-1)}
      style={{ backgroundColor: "blue", color: "white", ...style }}
    >
      {"<-"} Back
    </Button>
  );
};

export default BackButton;
