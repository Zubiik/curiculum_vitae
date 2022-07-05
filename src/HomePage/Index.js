import React from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from '../Navigation';
import Header from '../Header';
import { Container } from './styled';
import Portfolio from '../Portfolio';
import Tools from '../Tools';
import Contact from '../Contact';
import Title from '../component/Title';
import Footer from '../Footer';
import Skills from '../Skills';

function HomePage() {
  const { t } = useTranslation();
  return (
    <Container>
      <Navigation />
      <Header />
      <div id="competences"></div>
      <Title>{t('competences'.toUpperCase())}</Title>
      <Skills />
      <div id="portfolio"></div>
      <Title>{t('portfolio'.toUpperCase())}</Title>
      <Portfolio />
      <div id="tools"></div>
      <Title>{t('tools'.toUpperCase())}</Title>
      <Tools />
      <div id="contact"></div>
      <Title>{t('contact'.toUpperCase())}</Title>
      <Contact />
      <Footer />
    </Container>
  );
}

export default HomePage;
