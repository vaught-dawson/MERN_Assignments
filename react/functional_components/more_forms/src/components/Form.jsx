import styles from "./Form.module.css";
import { useReducer } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
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
      payload: value,
    });
  };

  return (
    <div className={styles.formComponent}>
      <form action="submit" onSubmit={(e) => getDataFromForm(e)}>
        <div className="first-name">
          <label htmlFor="firstName">First Name:</label>

          <input
            type="text"
            name="firstName"
            onChange={(e) => editFormData(e)}
          />
        </div>
        {state.firstName.length === 1 ? (
          <p className={styles.error}>
            First Name must be at least 2 characters
          </p>
        ) : null}
        <div className="last-name">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            onChange={(e) => editFormData(e)}
          />
        </div>
        {state.lastName.length === 1 ? (
          <p className={styles.error}>
            Last Name must be at least 2 characters
          </p>
        ) : null}
        <div className="email">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" onChange={(e) => editFormData(e)} />
        </div>
        {state.email.length < 5 && state.email.length > 0 ? (
          <p className={styles.error}>Email must be at least 5 characters</p>
        ) : null}
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            onChange={(e) => editFormData(e)}
          />
        </div>
        {state.password.length < 8 && state.password.length > 0 ? (
          <p className={styles.error}>
            Password must be at least 8 characters.
          </p>
        ) : null}
        {state.confirmPassword.length > 0 &&
        state.confirmPassword !== state.password ? (
          <p className={styles.error}>Passwords must match</p>
        ) : null}
        <div className="confirm-password">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={(e) => editFormData(e)}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
