import React from 'react';
import PropTypes from 'prop-types';

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
PinkStars.propTypes = {
  level: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default PinkStars;
