import React from "react";
import {CustomTitle} from './styled';

function Title({ children,className }) {
  return <CustomTitle className={className} >{children}</CustomTitle>;
}

export default Title;
