import React from "react";

const style = {
  backgroundColor: "#666666",
  border: "none",
  borderRadius: "4px",
  color: "white",
  padding: "4px 16px",
};

const Button = ({ text, callback }) => {
  return (
    <button onClick={(e) => callback(e)} style={style}>
      {text}
    </button>
  );
};

export default Button;
