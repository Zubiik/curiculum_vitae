import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../component/Button';
import { Container, TextCustom, ButtonsSection, TitleCustom } from './styled';

function Navigation() {
  const { t, i18n } = useTranslation();
  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Container>
      <TitleCustom>
        <TextCustom>Elodie Frappat</TextCustom>
      </TitleCustom>
      <ButtonsSection>
        <Button>
          <a href="#portfolio">
            <p>{t('portfolio')}</p>
          </a>
        </Button>
        <Button>
          <a href="#tools">
            <p>{t('tools')}</p>
          </a>
        </Button>
        <Button>
          <a href="#competences">
            <p>{t('competences')}</p>
          </a>
        </Button>
        <Button>
          <a href="#contact">
            <p>{t('contact')}</p>
          </a>
        </Button>
        <button onClick={() => changeLanguageHandler('fr')}>fr</button>
        <button onClick={() => changeLanguageHandler('en')}>en</button>
      </ButtonsSection>
    </Container>
  );
}

export default Navigation;
