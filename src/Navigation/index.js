import React from 'react';
import { useTranslation } from 'react-i18next';
import NavButton from '../component/Button/Index';
import { Container, TextCustom, ButtonsSection, TitleCustom } from './styled';

function Navigation() {
  const { t } = useTranslation();

  return (
    <Container>
      <TitleCustom>
        <TextCustom>Elodie Frappat</TextCustom>
      </TitleCustom>
      <ButtonsSection>
        {/* <NavButton >
          <a href="#parcours"><p>Parcours</p></a>
        </NavButton> */}

        <NavButton>
          <a href="#portfolio">
            <p>{t('portfolio')}</p>
          </a>
        </NavButton>
        <NavButton>
          <a href="#competences">
            <p>{t('competences')}</p>
          </a>
        </NavButton>
        <NavButton>
          <a href="#contact">
            <p>{t('contact')}</p>
          </a>
        </NavButton>
      </ButtonsSection>
    </Container>
  );
}

export default Navigation;
