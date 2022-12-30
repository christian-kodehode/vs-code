import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon";

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();

      setData(data);
    }

    getData();
  }, []);

  return (
    <div className="pokeContainer">
      <h1>Pokedex</h1>
      <div className="pokedex">
        {data &&
          data.results.map((pokemon, index) => <PokemonCard key={index} {...pokemon} />)}
      </div>
    </div>
  );
}

export default FetchData;
