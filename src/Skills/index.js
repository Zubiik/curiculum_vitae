import React from "react";
import {
  BoxContainer,
  TitleCustom,
  CustomTextLine,
  StarsContainer,
  GreenTitleCustom,
  BoldText,
  TextsContainer,
  Container,
  ImageCustom,
  ImageAndBoxCustom,
  ImageAndBoxCustomLeft,
  GoldTitleCustom
} from "./styled";
import PinkStars from "../component/PinkStars";
import GreenStars from "../component/GreenStars";
import frontEndImg from "../images/front-end.png";
import design from "../images/design-icon.png";
import workflow from "../images/workflow.png";

function Skills() {
  return (
    <Container>
      <ImageAndBoxCustom>
        <BoxContainer>
          <TitleCustom>Front-End</TitleCustom>
          <StarsContainer>
            <p>React</p>
            <PinkStars level={[1, 2, 3, 4, 5]} />
          </StarsContainer>
          <StarsContainer>
            <p>Javascript</p>
            <PinkStars level={[1, 2, 3, null, null]} />
          </StarsContainer>
          <StarsContainer>
            <p>React native</p>
            <PinkStars level={[1, 2, 3, null, null]} />
          </StarsContainer>
        </BoxContainer>
          <ImageCustom src={frontEndImg} alt="frontEnd icon" />
      </ImageAndBoxCustom>

      <ImageAndBoxCustomLeft>
        <BoxContainer>
          <GoldTitleCustom>Design</GoldTitleCustom>
          <StarsContainer>
            <p>Figma</p>
            <GreenStars level={[1, 2, 3, null, null]} />
          </StarsContainer>
          <StarsContainer>
            <p>Maquettage</p>
            <GreenStars level={[1, 2, null, null, null]} />
          </StarsContainer>
          <StarsContainer>
            <p>Prototypage</p>
            <GreenStars level={[1, null, null, null, null]} />
          </StarsContainer>
        </BoxContainer>
        <ImageCustom src={design} alt="design icon" />
      </ImageAndBoxCustomLeft>

      <ImageAndBoxCustom>
        <BoxContainer>
          <GreenTitleCustom>Environnement de travail</GreenTitleCustom>
          <TextsContainer>
            <CustomTextLine>
              <BoldText>système d'exploitation: </BoldText>Linux
            </CustomTextLine>

            <CustomTextLine>
              <BoldText>Workflow:</BoldText> Vs Code,Postman,Git, yarn
            </CustomTextLine>

            <CustomTextLine>
              <BoldText>IDE: </BoldText> Visual Studio Code
            </CustomTextLine>
          </TextsContainer>
        </BoxContainer>
        <ImageCustom src={workflow} alt="workflow icon" />
      </ImageAndBoxCustom>
    </Container>
  );
}

export default Skills;
