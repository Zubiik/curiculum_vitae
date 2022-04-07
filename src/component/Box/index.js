import React from 'react';
import { Container } from './styled';

function Box({ className, children }) {
  return <Container className={className}>{children}</Container>;
}

export default Box;
