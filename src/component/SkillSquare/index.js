import React from 'react';
import { Square, ZoomSquare, TextSquare } from './styled';

function SkillSquare({ className, label, image, link }) {
  return (
    <Square className={className}>
      <TextSquare href={link}>{label}</TextSquare>
      <ZoomSquare src={image} alt="jsImage" />
    </Square>
  );
}

export default SkillSquare;
