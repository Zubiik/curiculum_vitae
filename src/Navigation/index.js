import React from "react";
import NavButton from "../component/Button/Index";
import { Container, TextCustom, ButtonsSection, TitleCustom } from "./styled";

function Navigation() {
  return (
    <Container>
      <TitleCustom>
        <TextCustom>ELODIE FRAPPAT</TextCustom>
      </TitleCustom>
      <ButtonsSection>
        <NavButton>
          <p>Parcours</p>
        </NavButton>
        <NavButton>
          <p>Portfolio</p>
        </NavButton>
        <NavButton>
          <p>Compétences</p>
        </NavButton>
        <NavButton>
          <p>Contactez moi</p>
        </NavButton>
      </ButtonsSection>
    </Container>
  );
}

export default Navigation;
