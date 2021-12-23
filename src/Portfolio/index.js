import React from "react";
import shareMmap from "../images/Share-my-map-ICON.png";
import authentic from "../images/authentic-ICON.png";

import pokedex from "../images/Pokedex-ICON.png";
import {
  Container,
  ImgCustom,
  RightTextSection,
  SectionContainer,
  LeftTextSection,
  TextCustom,
  SectionShadowContainer,
  RightSectionContainer,
  SectionWithoutShadowContainer
} from "./styled";

function Portfolio({ text }) {
  return (
    <Container>
  
      <SectionContainer>
        <SectionShadowContainer>
          <img src={shareMmap} alt="phonesView" />
          <LeftTextSection>
            <TextCustom>Share My Map</TextCustom>
            <p>Application mobile listant les map customisé de google map grace a une communauté genre park4night
              Liste des cartes
              Partage des liens
            </p>
          </LeftTextSection>
        </SectionShadowContainer>
      </SectionContainer>

      <RightSectionContainer>
        <SectionWithoutShadowContainer>
          <RightTextSection>
            <TextCustom>Pokedex</TextCustom>
            <p>Page web copiant le pokedex du jeu Pokemon permettant de connaitre différentes informations d'un pokémon tel que leur statistique de combat, évolution ect...</p>
          </RightTextSection>
          <ImgCustom src={pokedex} alt="podexView" />
        </SectionWithoutShadowContainer>
      </RightSectionContainer>

      <SectionContainer>
        <SectionShadowContainer>
          <img src={authentic} alt="phoneView" />
          <LeftTextSection>
            <TextCustom>Authentic fleurs</TextCustom>
            <p>site web commercant créer via la plateforme Wix pour un fleuriste </p>
          </LeftTextSection>
        </SectionShadowContainer>
      </SectionContainer>
    </Container>
  );
}

export default Portfolio;
