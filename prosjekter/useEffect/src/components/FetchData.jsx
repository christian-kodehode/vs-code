import { useState, useEffect } from "react";

const API_ENDPOINT = "https://pokeapi.co/api/v2/pokemon";

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Do fetch logic
    async function getData() {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();

      console.log(data);
      setData(data);
    }

    getData();
  }, []);

  return {data && data.results.map(
    (pokemon) => <PokemonCard key={index} (...pokemon) />
    )};
}

export default FetchData;
