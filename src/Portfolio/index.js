import React from "react";
import shareMmap from "../images/Share-my-map-ICON.png";
import pokedex from "../images/Pokedex-ICON.png";
import Text from "../Text";
import {
  Container,
  ImgCustom,
  RightTextSection,
  SectionContainer,
  LeftTextSection,
  TextCustom,
  SectionShadowContainer,
  RightSectionContainer,
} from "./styled";

function Portfolio({ text }) {
  console.log("coucou--->", text);
  return (
    <Container>
      <SectionContainer>
        <SectionShadowContainer>
          <ImgCustom src={shareMmap} alt="phonesView" />
          <LeftTextSection>
            <TextCustom>Share My Map</TextCustom>
            <Text></Text>
          </LeftTextSection>
        </SectionShadowContainer>
      </SectionContainer>

      <RightSectionContainer>
        <SectionShadowContainer>
          <RightTextSection>
            <TextCustom>Pokedex</TextCustom>
            <Text></Text>
          </RightTextSection>
          <ImgCustom src={pokedex} alt="podexView" />
        </SectionShadowContainer>
      </RightSectionContainer>

      <SectionContainer>
        <SectionShadowContainer>
          <ImgCustom src={shareMmap} alt="phoneView" />
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
