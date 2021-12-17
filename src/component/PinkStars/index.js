import React from "react";
import { Container, StarCustom } from "./styled";


function PinkStars({ level }) {
  
  console.log(level);
  const doubled = level.map((star, index) => {
    return star ? (
        <StarCustom />
    ) : (
      <StarCustom/>
    );
  });
  return <Container>{doubled}</Container>;
}

export default PinkStars;
