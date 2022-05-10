import axios from "axios";
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const handleClick = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(({ data }) => {
        setPokemonList(data.results);
      });
  };

  return (
    <div className="App">
      <Button callback={handleClick} text={"Fetch Pokemon"} />

      <ul className="pokemon-container">
        {pokemonList.length === 0 ? (
          <h3>Click the button above to load the Pokemon!</h3>
        ) : (
          pokemonList.map((p, i) => <li key={i}>{p.name}</li>)
        )}
      </ul>
    </div>
  );
}

export default App;
