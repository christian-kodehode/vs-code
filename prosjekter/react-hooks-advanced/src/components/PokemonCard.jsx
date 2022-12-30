import { useState, useEffect } from "react";

function PokemonCard(props) {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const imgAlt = "image of the pokemon ";

  useEffect(() => {
    async function getData() {
      const response = await fetch(props.url);
      const data = await response.json();

      setPokemonDetails(data);
    }

    getData();
  }, []);

  return (
    <div className="pokecard">
      <h4>{props.name.toUpperCase()}</h4>
      {pokemonDetails ? (
        <img
          src={pokemonDetails.sprites.front_default}
          alt={imgAlt + props.name.toUpperCase()}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default PokemonCard;
