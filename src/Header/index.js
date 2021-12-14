import React from "react";
import { Container,TextContainer, TextCustom, ProfilPicture } from "./styled";
import pdp from "../images/photo.jpg";

function Header() {
  const circleText =
    "Developpeuse Web, Du blabla je fais des choses en tapant sur mon clavier";

  return (
    <Container>
      <TextContainer>
        <TextCustom>{circleText}</TextCustom>
        <p>Bienvenue</p>
      </TextContainer>
        <ProfilPicture src={pdp} alt="PDP" />
    </Container>
  );
}

export default Header;
