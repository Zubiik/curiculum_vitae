import React from "react";
import Navigation from "../Navigation";
import Header from "../Header";
import { Container } from "./styled";
import Portfolio from "../Portfolio";
import Studies from "../Studies";
import Tools from "../Tools";
import Contact from "../Contact";
import Title from "../component/Title";
import Footer from "../Footer";
import Skills from "../Skills";

function HomePage() {
  return (
    <Container>
      <Navigation />
      <Header />
      <div id="competences"></div>
      <Title>COMPETENCES</Title>
      <Skills />
      {/* <div id="parcours"></div>
      <Title>PARCOURS</Title>
      <Studies /> */}
      <div id="portfolio"></div>
      <Title>PORTFOLIO</Title>
      <Portfolio />
      <Title>OUTILS</Title>
      <Tools />
      <div id="contact"></div>
      <Title>CONTACT</Title>
      <Contact />
      <Footer />
    </Container>
  );
}

export default HomePage;
