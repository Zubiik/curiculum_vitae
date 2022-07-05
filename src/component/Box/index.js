import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';

function Box({ className, children }) {
  return <Container className={className}>{children}</Container>;
}
Box.propTypes = {
  children: PropTypes.arrayOf(PropTypes.number),
  className: PropTypes.string,
};
export default Box;
