import React from "react";
import Navigation from "../Navigation";
import Header from "../Header";
import {Container, } from "./styled";
import Portfolio from "../Portfolio";
import Studies from "../Studies";
import Tools from "../Tools";

function HomePage() {
  return (
    <Container>
      <Navigation />
      <Header />
      <Studies />
      <Portfolio />
      <Tools/>
    </Container>
  );
}

export default HomePage;
