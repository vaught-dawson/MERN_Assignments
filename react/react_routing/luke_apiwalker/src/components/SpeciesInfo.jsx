import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  bold: {
    fontWeight: "bold",
    marginRight: "8px",
  },
  button: {
    padding: "4px 16px",
    color: "white",
    backgroundColor: "#0019f8",
    borderRadius: "4px",
    marginTop: "8px",
    cursor: "pointer",
  },
};

const SpeciesInfo = ({
  data: {
    name,
    classification,
    designation,
    average_height,
    skin_colors,
    hair_colors,
    eye_colors,
    average_lifespan,
    language,
    homeworld: homeworld_url,
  },
}) => {
  const [homeworldData, setHomeworldData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(homeworld_url)
      .then((res) => {
        const data = res.data;
        return setHomeworldData(data);
      })
      .catch((err) => {
        console.log(err);
        throw new Error("Couldn't grab homeworld info.");
      });
  }, [homeworld_url]);

  const handleHomeoworldButtonClick = (e) => {
    e.preventDefault();
    navigate(`${homeworld_url.slice(21)}`);
  };

  return (
    <>
      <h2>{name}</h2>
      <div className="classification">
        <span style={styles.bold}>Classification: </span>
        <span>{classification}</span>
      </div>
      <div className="designation">
        <span style={styles.bold}>Designation: </span>
        <span>{designation}</span>
      </div>
      <div className="average-height">
        <span style={styles.bold}>Average Height: </span>
        <span>{average_height}</span>
      </div>
      <div className="hair-colors">
        <span style={styles.bold}>Hair Colors: </span>
        <span>{hair_colors}</span>
      </div>
      <div className="skin-colors">
        <span style={styles.bold}>Skin Colors: </span>
        <span>{skin_colors}</span>
      </div>
      <div className="eye-colors">
        <span style={styles.bold}>Eye Colors: </span>
        <span>{eye_colors}</span>
      </div>
      <div className="average-lifespan">
        <span style={styles.bold}>Average Lifespan: </span>
        <span>{average_lifespan}</span>
      </div>
      <div className="language">
        <span style={styles.bold}>Language: </span>
        <span>{language}</span>
      </div>
      <div className="homeworld">
        <span style={styles.bold}>Homeworld: </span>
        <span>{homeworldData.name || "Loading data. . ."}</span>
      </div>
      <button style={styles.button} onClick={handleHomeoworldButtonClick}>
        Homeworld
      </button>
    </>
  );
};
export default SpeciesInfo;
