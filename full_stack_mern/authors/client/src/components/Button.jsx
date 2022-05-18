import React from "react";

const styles = {
  button: {
    padding: "4px 16px",
    cursor: "pointer",
    border: "none",
    fontSize: "1em",
    textDecoration: "none",
    borderRadius: "2px",
    backgroundColor: "#e6e6e6",
  },
};

const Button = ({ onClick = () => {}, children: text, style = {} }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button onClick={handleClick} style={{ ...styles.button, ...style }}>
      {text}
    </button>
  );
};

export default Button;
