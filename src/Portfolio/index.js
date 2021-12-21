import React from "react";
import shareMmap from "../images/Share-my-map-ICON.png";
import pokedex from "../images/Pokedex-ICON.png";
import Text from "../component/Text";
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
            <Text></Text>
          </LeftTextSection>
        </SectionShadowContainer>
      </SectionContainer>

      <RightSectionContainer>
        <SectionWithoutShadowContainer>
          <RightTextSection>
            <TextCustom>Pokedex</TextCustom>
            <Text></Text>
          </RightTextSection>
          <ImgCustom src={pokedex} alt="podexView" />
        </SectionWithoutShadowContainer>
      </RightSectionContainer>

      <SectionContainer>
        <SectionShadowContainer>
          <img src={shareMmap} alt="phoneView" />
          <LeftTextSection>
            <TextCustom>find Water</TextCustom>
            <Text></Text>
          </LeftTextSection>
        </SectionShadowContainer>
      </SectionContainer>
    </Container>
  );
}

export default Portfolio;
