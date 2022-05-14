import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { NavigationContext } from "../context/NavigationContext";
import PersonInfo from "../components/PersonInfo";
import PlanetInfo from "../components/PlanetInfo";
import StarshipInfo from "../components/StarshipInfo";
import VehicleInfo from "../components/VehicleInfo";
import FilmInfo from "../components/FilmInfo";
import SpeciesInfo from "../components/SpeciesInfo";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    marginLeft: "42%",
    justifyContent: "center",
    gap: "4px",
  },
};

const Info = () => {
  const [info, setInfo] = useState(<h4>Loading data...</h4>);
  const { catagory, id } = useParams();
  const context = useContext(NavigationContext);

  useEffect(() => {
    const infoBlock = (data) => {
      switch (catagory) {
        case "people":
          return <PersonInfo data={data} />;
        case "planets":
          return <PlanetInfo data={data} />;
        case "starships":
          return <StarshipInfo data={data} />;
        case "vehicles":
          return <VehicleInfo data={data} />;
        case "films":
          return <FilmInfo data={data} />;
        case "species":
          return <SpeciesInfo data={data} />;
        default:
          throw new Error("Invalid catagory!");
      }
    };

    axios
      .get(`https://swapi.dev/api/${catagory}/${id}`)
      .then((res) => {
        const data = res.data;
        return setInfo(infoBlock(data));
      })
      .catch((err) => {
        console.log(err);
        return setInfo(
          <>
            <h4 style={{ marginBottom: "16px" }}>
              These aren't the droids you're looking for!
            </h4>
            <img
              src="https://www.meme-arsenal.com/memes/73c6199fdf919d926bbc64322f78974f.jpg"
              alt="Oni Wan Kenobi"
            />
          </>
        );
      });

    context.setCatagory(catagory);
    context.setId(id);
  }, [catagory, id]);

  return (
    <div className="info-container" style={styles.container}>
      {info}
    </div>
  );
};

export default Info;
