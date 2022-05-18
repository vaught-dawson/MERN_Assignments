import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Form from "./Form";

const AuthorForm = ({ initialValue = "", onSubmit, errors = {} }) => {
  const [name, setName] = useState(initialValue);
  const navigate = useNavigate();

  const handleSubmitClick = () => {
    onSubmit(name);
  };

  const handleCancelClick = () => {
    navigate("/");
  };

  return (
    <Form style={{ width: "200px", border: "1px solid gray" }}>
      <label htmlFor="name">Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {errors.name && (
        <p
          style={{
            color: "red",
            backgroundColor: "#f9aeae",
            borderRadius: "4px",
            padding: "4px",
            fontSize: "0.8em",
            marginTop: "8px",
          }}
        >
          {errors.name.message}
        </p>
      )}
      <div
        className="buttons"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "8px",
        }}
      >
        <Button
          style={{ color: "white", backgroundColor: "#66bbff" }}
          onClick={handleCancelClick}
        >
          Cancel
        </Button>
        <Button
          style={{ color: "white", backgroundColor: "#66bbff" }}
          onClick={handleSubmitClick}
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default AuthorForm;
