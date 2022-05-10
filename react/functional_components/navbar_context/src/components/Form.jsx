import React, { useContext } from "react";
import { WrapperContext } from "../context/Wrapper";

const styles = {
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: "1.15em",
    marginRight: "8px",
  },
  input: {
    fontSize: "1.15em",
  },
};

const Form = () => {
  const context = useContext(WrapperContext);

  return (
    <form style={styles.form}>
      <label htmlFor="name" style={styles.label}>
        Your Name:
      </label>
      <input
        name="name"
        onChange={(e) => context.setName(e.target.value)}
        value={context.name}
        style={styles.input}
      />
    </form>
  );
};

export default Form;
