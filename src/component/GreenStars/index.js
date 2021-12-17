import React from "react";
import { Container, CustomStar, FillCustom } from "./styled";

function GreenStars({ level }) {
  const doubled = level.map((star, index) => {
    return star ? <CustomStar /> : <FillCustom />;
  });
  return <Container>{doubled}</Container>;
}

export default GreenStars;
