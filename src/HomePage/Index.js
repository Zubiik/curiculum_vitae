import React from "react";
import Navigation from "../Navigation";
import Header from "../Header";
import {Container, } from "./styled";
import Portfolio from "../Portfolio";
import Studies from "../Studies";

function HomePage() {
  return (
    <Container>
      <Navigation />
      <Header />
      <Studies />
      <Portfolio />
    </Container>
  );
}

export default HomePage;
