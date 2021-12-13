import React from "react";
import Box from "../component/Box";
import { BoxContainer, ParcoursContainer } from "./styled";
import Title from "../component/Title";

function Studies() {
  return (
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
  );
}

export default Studies;
