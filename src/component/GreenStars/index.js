import React from "react";
import { Container, CustomStar} from "./styled";


function GreenStars({ level }) {
  console.log(level);
  const doubled = level.map((star, index) => {
    return star ? (
      <CustomStar />
    ) : (
      <CustomStar  />
    );
  });
  return <Container>{doubled}</Container>;
}

export default GreenStars;
