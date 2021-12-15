import React from "react";
import { Container} from "./styled";
import coloredStar from "../../images/pinkStars/colored.png";
import mixedStar from "../../images/pinkStars/mixed.png";
import emptyStar from "../../images/pinkStars/empty.png";

function PinkStars({ level }) {
  console.log(level);
  const doubled = level.map((star, index) => {
    return star ? (
      <img src={coloredStar} alt="colored-star" />
    ) : (
      <img src={emptyStar} alt="empty-star" />
    );
  });
  return <Container>{doubled}</Container>;
}

export default PinkStars;
