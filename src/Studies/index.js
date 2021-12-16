import React from "react";
import Box from "../component/Box";
import { Container, ParcoursContainer } from "./styled";
import figmaImage from "../images/ex.png";

function Studies() {
  return (
    <Container>
      <ParcoursContainer >
        <img src={figmaImage} alt="i" />
        <Box>
          <p>
            Where does it come from? Contrary to popular belief, Lorem Ipsum is
            not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Where does it come from? Contrary
            to popular belief, Lorem Ipsum is not simply random text. It has
            roots in a piece of classical Latin literature from 45 BC, making it
            over 2000 years old. Richard McClintock, a Latin professor at Where
            does it come from? Contrary to popular belief, Lorem Ipsum is not
            simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at
          </p>
        </Box>
      </ParcoursContainer>
    </Container>
  );
}

export default Studies;
