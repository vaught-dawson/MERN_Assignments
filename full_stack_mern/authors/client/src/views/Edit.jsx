import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthorForm from "../components/AuthorForm";

const Edit = () => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/authors/" + id)
      .then((res) => setName(res.data.author.name))
      .catch((err) => {
        console.log("The was an error getting the user from the API:", err);
        setErrors(err.response.data.error.errors);
      });
  }, [id]);

  const handleSubmit = (authorName) => {
    axios
      .put("http://localhost:5000/api/authors/update/" + id, {
        name: authorName,
      })
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
        Edit this author:
      </h4>
      {name !== "" && (
        <AuthorForm
          onSubmit={handleSubmit}
          errors={errors}
          initialValue={name}
        />
      )}
    </div>
  );
};

export default Edit;
