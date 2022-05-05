import styles from "./Form.module.css";
import { useState } from "react";

const Form = () => {
  const [form, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Never going to run because there's no form submit
  const getDataFromForm = (e) => {
    e.preventDefault();
  };

  const editFormData = (e) => {
    const fieldName = e.target.attributes.getNamedItem("name").nodeValue;
    let newFormData = { ...form };
    newFormData[fieldName] = e.target.value;
    setFormData(newFormData);
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
        {form.firstName.length === 1 ? (
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
        {form.lastName.length === 1 ? (
          <p className={styles.error}>
            Last Name must be at least 2 characters
          </p>
        ) : null}
        <div className="email">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" onChange={(e) => editFormData(e)} />
        </div>
        {form.email.length < 5 && form.email.length > 0 ? (
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
        {form.password.length < 8 && form.password.length > 0 ? (
          <p className={styles.error}>
            Password must be at least 8 characters.
          </p>
        ) : null}
        {form.confirmPassword.length > 0 &&
        form.confirmPassword !== form.password ? (
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
