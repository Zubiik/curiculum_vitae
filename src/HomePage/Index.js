import React from "react";
import Navigation from "../Navigation";
import Header from "../Header";
import {Container, } from "./styled";
import Portfolio from "../Portfolio";
import Studies from "../Studies";
import Tools from "../Tools";
import Contact from "../Contact";

function HomePage() {
  return (
    <Container>
      <Navigation />
      <Header />
      <Studies />
      <Portfolio />
      <Tools/>
      <Contact/>
    </Container>
  );
}

export default HomePage;
