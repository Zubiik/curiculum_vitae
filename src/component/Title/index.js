import React from 'react';
import PropTypes from 'prop-types';

import { CustomTitle } from './styled';

function Title({ children, className }) {
  return <CustomTitle className={className}>{children}</CustomTitle>;
}
Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};
export default Title;
