import styles from "./Form.module.css";
import { useReducer } from "react";

const initialState = {
  firstName: {
    value: "",
    error: null,
  },
  lastName: {
    value: "",
    error: null,
  },
  email: {
    value: "",
    error: null,
  },
};

const reducer = (state, action) => {
  return {
    ...state,
    [action.type]: action.payload,
  };
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Never going to run because there's no form submit
  const getDataFromForm = (e) => {
    e.preventDefault();
  };

  const editFormData = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: name,
      payload: {
        value,
      },
    });

    validateFormData(e);
  };

  const validateFormData = (e) => {
    const { name, value } = e.target;
    let error = false;

    switch (name) {
      case "firstName":
      case "lastName":
        if (value.length < 2 && value !== "") {
          error = true;
        }
        return dispatch({
          type: name,
          payload: {
            error,
          },
        });
      case "email":
        if (
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) &&
          value !== ""
        ) {
          error = true;
        }
        console.log(error);
        return dispatch({
          type: name,
          payload: {
            error,
          },
        });

      default:
        throw new Error("Invalid form data title.");
    }
  };

  return (
    <form
      action="submit"
      onSubmit={(e) => getDataFromForm(e)}
      className={styles.formComponent}
    >
      <label htmlFor="firstName">First Name</label>
      <input type="text" name="firstName" onChange={(e) => editFormData(e)} />
      {state.firstName.error ? (
        <span className={styles.error}>
          Your first name must have at least 2 characters!
        </span>
      ) : null}
      <label htmlFor="lastName">Last Name</label>
      <input type="text" name="lastName" onChange={(e) => editFormData(e)} />
      {state.lastName.error ? (
        <span className={styles.error}>
          Your last name must have at least 2 characters!
        </span>
      ) : null}
      <label htmlFor="email">Email</label>
      <input type="email" name="email" onChange={(e) => editFormData(e)} />
      {state.email.error ? (
        <span className={styles.error}>Invalid Email!</span>
      ) : null}
      <input type="submit" value="Submit" className={styles.btn} />
    </form>
  );
};

export default Form;
