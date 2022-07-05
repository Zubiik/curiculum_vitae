import React from 'react';
import PropTypes from 'prop-types';
import { CustomButton } from './styled';

function Button({ children }) {
  return <CustomButton>{children}</CustomButton>;
}
Button.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Button;
