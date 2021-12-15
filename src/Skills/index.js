import React from "react";
import {
  Container,
  TitleCustom,
  StarsContainer,
  GreenTitleCustom,
  BoldText,
} from "./styled";
import PinkStars from "../component/PinkStars";
import GreenStars from "../component/GreenStars";

function Skills() {
  return (
    <div>
      <Container>
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
      </Container>

      <Container>
        <GreenTitleCustom>Design</GreenTitleCustom>
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
      </Container>
      <Container>
        <GreenTitleCustom>Environnement de travail</GreenTitleCustom>
        <StarsContainer>
          <span>
            <BoldText>système d'exploitation: </BoldText>Linux
          </span>
        </StarsContainer>
        <StarsContainer>
          <span>
            <BoldText>Workflow:</BoldText> Vs Code,Postman,Git, yarn
          </span>
        </StarsContainer>
        <StarsContainer>
            <BoldText>IDE: </BoldText> <span>Visual Studio Code
          </span>
        </StarsContainer>
      </Container>
    </div>
  );
}

export default Skills;
