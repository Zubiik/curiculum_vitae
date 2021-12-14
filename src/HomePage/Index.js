import React from "react";
import Navigation from "../Navigation";
import Header from "../Header";
import { Container } from "./styled";
import Portfolio from "../Portfolio";
import Studies from "../Studies";
import Tools from "../Tools";
import Contact from "../Contact";
import Title from "../component/Title";

function HomePage() {
  return (
    <Container>
      <Navigation />
      <Header />
      <Title>PARCOURS</Title>
      <Studies />
      <Title>PORTFOLIO</Title>
      <Portfolio />
      <Title>SKILLLLLLLS</Title>
      <Tools />
      <Title>Me contacter</Title>
      <Contact />
    </Container>
  );
}

export default HomePage;
