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
  SectionWithoutShadowContainer,
  TechnoCustom,
  ContainerTechno,
  ContainerTechnoRight,
  RightTechnoCustom,
} from "./styled";

function Portfolio({ text }) {
  return (
    <Container>
      <SectionContainer>
        <SectionShadowContainer>
          <img src={shareMmap} alt="phonesView" />
          <LeftTextSection>
            <TextCustom>Share My Map</TextCustom>
            <p>
              Application mobile communautaire listant les cartes favorites dans google map.
              Un utilisateur peut ajouter un lien vers une carte customisée afin
              de participer au dévelloppement de l'application. Il peut aussi
              créer sa propre liste de favoris.
            </p>
            <ContainerTechno>
              <TechnoCustom>React Native</TechnoCustom>
              <TechnoCustom>Expo</TechnoCustom>
              <TechnoCustom>Figma</TechnoCustom>
            </ContainerTechno>
          </LeftTextSection>
        </SectionShadowContainer>
      </SectionContainer>

      <RightSectionContainer>
        <SectionWithoutShadowContainer>
          <RightTextSection>
            <TextCustom>Pokedex</TextCustom>
            <p>
              Page web copiant le pokedex du jeu Pokémon. Permet de connaitre
              différentes informations d'un pokémon tel que ses statistiques de
              combat, ses évolutions ect...
            </p>
            <ContainerTechnoRight>
              <RightTechnoCustom>React</RightTechnoCustom>
              <RightTechnoCustom>Figma</RightTechnoCustom>
            </ContainerTechnoRight>
          </RightTextSection>
          <ImgCustom src={pokedex} alt="podexView" />
        </SectionWithoutShadowContainer>
      </RightSectionContainer>

      <SectionContainer>
        <SectionShadowContainer>
          <img src={authentic} alt="phoneView" />
          <LeftTextSection>
            <TextCustom>Authentic fleurs</TextCustom>
            <p>
              Site web commercant créer via la plateforme Wix pour un fleuriste.
              
            </p>
          </LeftTextSection>
        </SectionShadowContainer>
      </SectionContainer>
    </Container>
  );
}

export default Portfolio;
