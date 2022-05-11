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

const PersonInfo = ({
  data: {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
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
      <div className="height">
        <span style={styles.bold}>Height: </span>
        <span>{height}</span>
      </div>
      <div className="mass">
        <span style={styles.bold}>Mass: </span>
        <span>{mass}</span>
      </div>
      <div className="hair-color">
        <span style={styles.bold}>Hair Color: </span>
        <span>{hair_color}</span>
      </div>
      <div className="skin-color">
        <span style={styles.bold}>Skin Color: </span>
        <span>{skin_color}</span>
      </div>
      <div className="eye-color">
        <span style={styles.bold}>Eye Color: </span>
        <span>{eye_color}</span>
      </div>
      <div className="birth-year">
        <span style={styles.bold}>Birth Year: </span>
        <span>{birth_year}</span>
      </div>
      <div className="gender">
        <span style={styles.bold}>Gender: </span>
        <span>{gender}</span>
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
export default PersonInfo;
