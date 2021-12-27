import React from "react";
import NavButton from "../component/Button/Index";
import { Container, TextCustom, ButtonsSection, TitleCustom } from "./styled";

function Navigation() {


  return (
    <Container>
      <TitleCustom>
        <TextCustom>Elodie Frappat</TextCustom>
      </TitleCustom>
      <ButtonsSection>

        <NavButton >
          <a href="#parcours"><p>Parcours</p></a>
        </NavButton>
        
        <NavButton>
          <a href="#portfolio"><p>Portfolio</p></a>
        </NavButton>
        <NavButton>
          <a href="#competences"><p>Compétences</p></a>
        </NavButton>
        <NavButton>
          <a href="#contact"><p>Contactez moi</p></a>
        </NavButton>
      </ButtonsSection>
    </Container>
  );
}

export default Navigation;
