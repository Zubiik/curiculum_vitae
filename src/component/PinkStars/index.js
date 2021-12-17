import React from "react";
import { Container, StarCustom, FillCustom } from "./styled";

function PinkStars({ level, setColor }) {
  
  const doubled = level.map((star, index) => {
    return star ? <StarCustom /> : <FillCustom setColor={"#3F8D6C"} />;
  });
  return <Container>{doubled}</Container>;
}

export default PinkStars;
