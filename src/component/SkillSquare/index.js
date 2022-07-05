import React from 'react';
import PropTypes from 'prop-types';
import { Square, ZoomSquare, TextSquare } from './styled';

function SkillSquare({ className, label, image, link }) {
  return (
    <Square className={className}>
      <TextSquare href={link}>{label}</TextSquare>
      <ZoomSquare src={image} alt="jsImage" />
    </Square>
  );
}
SkillSquare.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SkillSquare;
