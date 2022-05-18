import React from "react";

const formStyles = {
  display: "flex",
  flexDirection: "column",
  padding: "8px",
};

const Form = ({ children, style = {} }) => {
  return <form style={{ ...formStyles, ...style }}>{children}</form>;
};

export default Form;
