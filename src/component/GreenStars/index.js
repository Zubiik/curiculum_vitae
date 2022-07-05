import React from 'react';
import PropTypes from 'prop-types';
import { Container, CustomStar, FillCustom } from './styled';

function GreenStars({ level }) {
  const doubled = level.map((star, index) => {
    return star ? <CustomStar key={index} /> : <FillCustom key={index} />;
  });
  return <Container>{doubled}</Container>;
}
GreenStars.propTypes = {
  level: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default GreenStars;
