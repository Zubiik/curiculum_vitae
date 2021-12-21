import React from "react";
import shareMmap from "../images/Share-my-map-ICON.png";
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
            <p>Application permettant de partager ses maps favorites</p>
          </LeftTextSection>
        </SectionShadowContainer>
      </SectionContainer>

      <RightSectionContainer>
        <SectionWithoutShadowContainer>
          <RightTextSection>
            <TextCustom>Pokedex</TextCustom>
            <p>Site permettant d'acceder aux stats de tout les pokemons</p>
          </RightTextSection>
          <ImgCustom src={pokedex} alt="podexView" />
        </SectionWithoutShadowContainer>
      </RightSectionContainer>

      <SectionContainer>
        <SectionShadowContainer>
          <img src={shareMmap} alt="phoneView" />
          <LeftTextSection>
            <TextCustom>find Water</TextCustom>
            <p>Application mobile répertoriant tout les points d'eaux sur une carte</p>
          </LeftTextSection>
        </SectionShadowContainer>
      </SectionContainer>
    </Container>
  );
}

export default Portfolio;
