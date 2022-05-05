import styles from "./Form.module.css";
import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Never going to run because there's no form submit
  const getDataFromForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.formComponent}>
      <form action="submit" onSubmit={(e) => getDataFromForm(e)}>
        <div className="first-name">
          <label htmlFor="firstName">First Name:</label>

          <input
            type="text"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="last-name">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="confirm-password">
          <label htmlFor="passwordConfirm">Confirm Password:</label>
          <input
            type="password"
            name="passwordConfirm"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </form>
      <div className="results">
        <h1>Your Form Data:</h1>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
      </div>
    </div>
  );
};

export default Form;
