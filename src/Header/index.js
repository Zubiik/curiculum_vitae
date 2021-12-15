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
        <h2>Et si vous regardez mon site vous allez peut etre m'embaucher</h2>
      </TextContainer>
        <ProfilPicture src={pdp} alt="PDP" />
    </Container>
  );
}

export default Header;
