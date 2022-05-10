import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const handleClick = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((res) => res.json())
      .then((res) => {
        setPokemonList(res.results);
      });
  };
  console.log(JSON.stringify(pokemonList));
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
