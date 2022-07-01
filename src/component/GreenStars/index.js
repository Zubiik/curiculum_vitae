import React from 'react';
import { Container, CustomStar, FillCustom } from './styled';

function GreenStars({ level }) {
  const doubled = level.map((star, index) => {
    return star ? <CustomStar key={index} /> : <FillCustom key={index} />;
  });
  return <Container>{doubled}</Container>;
}

export default GreenStars;
