import React from "react";
import Box from "../component/Box";
import { BoxContainer, Container, ParcoursContainer } from "./styled";
import Title from "../component/Title";

function Studies() {
  return (
    <Container>
      <ParcoursContainer>
        <Title>
          <p>PARCOURS</p>
        </Title>
        <BoxContainer>
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </BoxContainer>
      </ParcoursContainer>
    </Container>
  );
}

export default Studies;
