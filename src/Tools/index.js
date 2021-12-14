import React from "react";
import { Container, SquaresContainer, Square, ZoomSquare, TextSquare } from "./styled";
import jsImage from "../images/js.png";
import reactImage from "../images/react.png";
import htmlImage from "../images/html.png";
import cssImage from "../images/css.png";
import githubImage from "../images/github.png";
import jestImage from "../images/jest.png";
import Title from '../component/Title';

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
        <TextSquare>Git Hub</TextSquare>
        <ZoomSquare src={githubImage} alt="githubImage" />
      </Square>
      <Square>
        <TextSquare>Html</TextSquare>

        <ZoomSquare src={htmlImage} alt="htmlImage" />
      </Square>
    </SquaresContainer>
    </Container>
  );
}

export default Tools;
