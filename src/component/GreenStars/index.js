import React from 'react';
import { Container, CustomStar, FillCustom } from './styled';

function GreenStars({ level }) {
  const doubled = level.map((star) => {
    return star ? <CustomStar /> : <FillCustom />;
  });
  return <Container>{doubled}</Container>;
}

export default GreenStars;
