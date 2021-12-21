import React from "react";
import { Container, SquaresContainer, Square, ZoomSquare, TextSquare } from "./styled";
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

function Tools() {
  return (
    <Container>
    <SquaresContainer>
      <Square>
      <TextSquare>JavaScript</TextSquare>
        <ZoomSquare src={jsImage} alt="jsImage" />
      </Square>
      <Square>
        <TextSquare>React</TextSquare>
        <ZoomSquare src={reactImage} alt="reactImage" />
      </Square>
      <Square>
        <TextSquare>Git Hub</TextSquare>
        <ZoomSquare src={githubImage} alt="githubImage" />
      </Square>
      <Square>
        <TextSquare>Jest</TextSquare>

        <ZoomSquare src={jestImage} alt="jestImage" />
      </Square>
      <Square>
        <TextSquare>CSS</TextSquare>

        <ZoomSquare src={cssImage} alt="cssImage" />
      </Square>
      <Square>
        <TextSquare>Html</TextSquare>

        <ZoomSquare src={htmlImage} alt="htmlImage" />
      </Square>
      <Square>
        <TextSquare>Storybook</TextSquare>
        <ZoomSquare src={storyBook} alt="storyBook" />
      </Square>
      <Square>
        <TextSquare>Cucumber</TextSquare>

        <ZoomSquare src={cucumber} alt="cucumber" />
      </Square>
      <Square>
        <TextSquare>Expo</TextSquare>

        <ZoomSquare src={emotion} alt="Emotion" />
      </Square>
      <Square>
        <TextSquare>Emotion</TextSquare>

        <ZoomSquare src={expo} alt="Expo" />
      </Square>
      <Square>
        <TextSquare>Figma</TextSquare>

        <ZoomSquare src={figma} alt="figma" />
      </Square>
      <Square>
        <TextSquare>React Testing Library</TextSquare>

        <ZoomSquare src={rtl} alt="react-testing-library" />
      </Square>
    </SquaresContainer>
    </Container>
  );
}

export default Tools;
