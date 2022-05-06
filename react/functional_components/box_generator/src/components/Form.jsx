import styles from "./Form.module.css";
import React, { useState } from "react";

const Form = (props) => {
  const defaultState = {
    color: "",
    size: 200,
  };

  const [state, setState] = useState(defaultState);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!state.color || !state.size) return;
    const newBlocks = {
      boxes: [...props.boxState.boxes, state],
    };
    props.setBoxState(newBlocks);

    setState(defaultState);
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <form onSubmit={(e) => onFormSubmit(e)}>
      <label htmlFor="color">Color</label>
      <input
        type="text"
        name="color"
        onInput={(e) => onInputChange(e)}
        value={state.color}
        className={styles.inputBox}
      />
      <label htmlFor="size">Size</label>
      <input
        type="text"
        name="size"
        className={styles.inputBox}
        value={state.size}
        onInput={(e) => onInputChange(e)}
      />
      <input type="submit" value="Add" className={styles.btn} />
    </form>
  );
};

export default Form;
