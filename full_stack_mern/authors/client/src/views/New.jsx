import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthorForm from "../components/AuthorForm";

const New = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (authorName) => {
    axios
      .post("http://localhost:5000/api/authors/new", { name: authorName })
      .then(() => navigate("/"))
      .catch((err) => {
        console.log("The was an error posting to the API:", err);
        setErrors(err.response.data.error.errors);
      });
  };

  return (
    <div className="content">
      <Link to={"/"}>Home</Link>
      <h4 style={{ color: "rebeccapurple", margin: "8px 0" }}>
        Add a new author:
      </h4>
      <AuthorForm onSubmit={handleSubmit} errors={errors} />
    </div>
  );
};

export default New;
