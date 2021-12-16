import React from "react";
import { Container, Star} from "./styled";
import coloredStar from "../../images/greenStars/colored.png";
import mixedStar from "../../images/greenStars/mixed.png";
import emptyStar from "../../images/greenStars/empty.png";

function GreenStars({ level }) {
  console.log(level);
  const doubled = level.map((star, index) => {
    return star ? (
      <Star src={coloredStar} alt="colored-star" />
    ) : (
      <Star src={emptyStar} alt="empty-star" />
    );
  });
  return <Container>{doubled}</Container>;
}

export default GreenStars;
