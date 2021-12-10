import React from "react";


function Text() {
    const text = {
      shareMyMap:"Tout comme la Banque Pokémon depuis la 7ème génération, PokémonTransférer des Pokémon depuis la Banque Pokémon permet d'avoir toutes les entrées du Pokédex d",
      pokedex:"Tout comme la Banque Pokémon depuis la 7ème génération, PokémonTransférer des Pokémon depuis la Banque Pokémon permet d'avoir toutes les entrées du Pokédex d",
      findWater:"Tout comme la Banque Pokémon depuis la 7ème génération,Transférer des Pokémon depuis la Banque Pokémon permet d'avoir toutes les entrées du Pokédex d Pokémon",
    }
    console.log(text)
  return (
    <div text={text}>
{text.pokedex}
    </div>
  );
}

export default Text;
