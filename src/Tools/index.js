import React from "react";
import {
  Container,
  SquaresContainer,
 
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
          <SkillSquare
            link={"https://www.javascript.com/"}
            label={"JavaScript"}
            image={jsImage}
          />
          <SkillSquare
            link={"https://www.figma.com/ui-design-tool/"}
            label={"Figma"}
            image={figma}
          />
          <SkillSquare
            link={"https://developer.mozilla.org/fr/docs/Web/HTML"}
            label={"Html"}
            image={htmlImage}
          />
          <SkillSquare
            link={"https://github.com/Zubiik"}
            label={"Git Hub"}
            image={githubImage}
          />

          <SkillSquare
            link={"https://developer.mozilla.org/fr/docs/Web/CSS"}
            label={"CSS"}
            image={cssImage}
          />

          <SkillSquare
            link={"https://fr.reactjs.org/"}
            label={"React"}
            image={reactImage}
          />
          <SkillSquare
            link={"https://storybook.js.org/"}
            label={"Storybook"}
            image={storyBook}
          />
          <SkillSquare
            link={"https://cucumber.io/"}
            label={"Cucumber"}
            image={cucumber}
          />
        
          <SkillSquare link={"https://expo.dev/"} label={"Expo"} image={expo} />
          <SkillSquare
            link={"https://emotion.sh/docs/introduction"}
            label={"Emotion"}
            image={emotion}
          />
          <SkillSquare
            link={"https://jestjs.io/fr/"}
            label={"Jest"}
            image={jestImage}
          />

          <SkillSquare
            link={
              "https://testing-library.com/docs/react-testing-library/intro/"
            }
            label={"React Testing Library"}
            image={rtl}
          />
      </SquaresContainer>
    </Container>
  );
}

export default Tools;
