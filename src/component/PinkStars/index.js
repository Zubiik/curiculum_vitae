import React from 'react';
import { Container, StarCustom, FillCustom } from './styled';

function PinkStars({ level }) {
  const doubled = level.map((star, index) => {
    return star ? (
      <StarCustom key={index} />
    ) : (
      <FillCustom key={index} setColor={'#3F8D6C'} />
    );
  });
  return <Container>{doubled}</Container>;
}

export default PinkStars;
