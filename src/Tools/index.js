import React from "react";
import {
  Container,
  SquaresContainer,
  Square,
  ZoomSquare,
  TextSquare,
} from "./styled";
import jsImage from "../images/js.png";
import reactImage from "../images/react.png";
import htmlImage from "../images/html.png";
import cssImage from "../images/css.png";
import githubImage from "../images/github.png";
import jestImage from "../images/jest.png";
import storyBook from "../images/storyBook.png";
import cucumber from "../images/cucumber.png";
import expo from "../images/expo.png";
import emotion from "../images/emotion.png";
import figma from "../images/figma.png";
import rtl from "../images/rtl.png";
import SkillSquare from "../component/SkillSquare";

function Tools() {
  return (
    <Container>
      <SquaresContainer>
        <SkillSquare label={"JavaScript"} image={jsImage} />
        <SkillSquare label={"React"} image={reactImage} />
        <SkillSquare label={"Git Hub"} image={githubImage} />
        <SkillSquare label={"Jest"} image={jestImage} />
        <SkillSquare label={"CSS"} image={cssImage} />
        <SkillSquare label={"Html"} image={htmlImage} />
        <SkillSquare label={"Storybook"} image={storyBook} />
        <SkillSquare label={"Cucumber"} image={cucumber} />
        <SkillSquare label={"Expo"} image={expo} />
        <SkillSquare label={"Emotion"} image={emotion} />
        <SkillSquare label={"Figma"} image={figma} />
        <SkillSquare label={"React Testing Library"} image={rtl} />
      </SquaresContainer>
    </Container>
  );
}

export default Tools;
