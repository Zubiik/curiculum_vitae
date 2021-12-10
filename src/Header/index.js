import React from "react";
import { Container,TextContainer, CircleContainer, TextCustom, ImageCercle } from "./styled";
import logo from "../images/photo.png";

function Header() {
  const circleText =
    "Developpeuse Web, Du blabla je fais des choses en tapant sur mon clavier";

  return (
    <Container>
      <TextContainer>
        <TextCustom>{circleText}</TextCustom>
        <p>Bienvenue</p>
      </TextContainer>
      <CircleContainer>
        <ImageCercle src={logo} alt="PDP" />
      </CircleContainer>
    </Container>
  );
}

export default Header;
