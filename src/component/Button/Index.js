import React from "react";
import { CustomButton } from "./styled";

function NavButton({ children }) {
  return <CustomButton>{children}</CustomButton>;
}

export default NavButton;
