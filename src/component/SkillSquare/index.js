import React from "react";
import {  Square, ZoomSquare, TextSquare } from "./styled";

function SkillSquare({ className, label, image }) {
  return (
      <Square className={className}>
        <TextSquare>{label}</TextSquare>
        <ZoomSquare src={image} alt="jsImage" />
      </Square>
  );
}

export default SkillSquare;
