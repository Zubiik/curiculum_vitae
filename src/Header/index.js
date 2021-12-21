import React from "react";
import { Container,TextContainer, TextCustom, ProfilPicture } from "./styled";
import pdp from "../images/photo.jpg";

function Header() {
  const circleText =
    "Developpeuse Web front-end ";

  return (
    <Container>
      <TextContainer>
        <TextCustom>{circleText}</TextCustom>
        <h2>Et si vous regardez mon site vous allez peut etre m'embaucher</h2>
      </TextContainer>
        <ProfilPicture src={pdp} alt="PDP" />
    </Container>
  );
}

export default Header;
