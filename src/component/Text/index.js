import React from "react";
import { Container } from "./styled.js";

function Text() {
  const text = {
    shareMyMap:
      "Tout la Banque Pokémon permet d'avoir toutes les entrées du Pokédex d",
    pokedex:
      " Pokémon depuisd'avoir toutes les entrées du Pokédex d",
    findWater:
      "Tout comme la Banque Pokémon depuis la 7ème génération,Transférer des Pokémon depuis la Banque Pokémon permet d'avoir toutes les entrées du Pokédex d Pokémon",
  };
  console.log(text);
  return <Container text={text}>{text.pokedex}</Container>;
}

export default Text;
