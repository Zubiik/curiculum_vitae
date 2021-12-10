import React from "react";
import phoneView from "../images/phoneView.png";
import pokedexView from "../images/pokedexProject.png";
import Text from "../Text";
import {
  ImgCustom,
  PokedexSectionContainer,
  PokeImgCustom,
  SectionContainer,
  TextSection,
  SectionShadowContainer,
  SectionPokedexShadowContainer,CustomTitle
} from "./styled";

function Portfolio({ text }) {
  console.log("coucou--->", text);
  return (
    <div>
      <CustomTitle>PORTFOLIO</CustomTitle>
      <SectionContainer>
        <SectionShadowContainer>
          <ImgCustom src={phoneView} alt="phoneView" />
          <TextSection>
            <CustomTitle>Share My Map</CustomTitle>
            <Text></Text>
          </TextSection>
        </SectionShadowContainer>
      </SectionContainer>
      <PokedexSectionContainer>
        <SectionPokedexShadowContainer>
          <PokeImgCustom src={pokedexView} alt="desktopView" />
          <TextSection>
            <CustomTitle>Pokedex</CustomTitle>
            <Text />
          </TextSection>
        </SectionPokedexShadowContainer>
      </PokedexSectionContainer>
      <SectionContainer>
        <SectionShadowContainer>
         
          <TextSection>
            <CustomTitle>find Water</CustomTitle>
            <Text></Text>
          </TextSection>
        <ImgCustom src={phoneView} alt="phoneView" />
        </SectionShadowContainer> 
      </SectionContainer>
    </div>
  );
}

export default Portfolio;
