import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavigationContext } from "../context/NavigationContext";

const catagories = [
  "planets",
  "starships",
  "vehicles",
  "people",
  "films",
  "species",
];

const styles = {
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "32px",
  },
  input: {
    backgroundColor: "#efefef",
    borderRadius: "4px",
    marginRight: "16px",
    padding: "8px",
  },
  label: {
    marginRight: "4px",
  },
  button: {
    padding: "4px 16px",
    border: "0",
    borderRadius: "4px",
    backgroundColor: "#0019f8",
    color: "white",
  },
};

const SearchBar = () => {
  const context = useContext(NavigationContext);
  const [catagoryState, setCatagoryState] = useState(context.catagory);
  const [idState, setIdState] = useState(context.id);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${catagoryState}/${parseInt(idState)}`);
  };

  useEffect(() => {
    setCatagoryState(context.catagory);
    setIdState(context.id);
  }, [context]);

  return (
    <form onSubmit={(e) => handleSubmit(e)} style={styles.form}>
      <label htmlFor="catagory" style={styles.label}>
        Search for:{" "}
      </label>
      <select
        name="catagory"
        value={catagoryState}
        onChange={(e) => setCatagoryState(e.target.value)}
        style={styles.input}
      >
        {catagories.map((catagory, i) => (
          <option value={catagory} key={i}>
            {catagory.charAt(0).toUpperCase() + catagory.slice(1)}
          </option>
        ))}
      </select>
      <label htmlFor="id" style={styles.label}>
        ID:
      </label>
      <input
        type="number"
        name="id"
        value={idState}
        onChange={(e) => setIdState(e.target.value)}
        style={styles.input}
      />
      <button style={styles.button}>Search</button>
    </form>
  );
};

export default SearchBar;
