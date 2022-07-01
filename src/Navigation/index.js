import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../component/Button';
import SvgfRFlag from '../images/SvgFRFlag';
import SvgGBFlag from '../images/SvgGBFlag';
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
          <a Buttonhref="#portfolio">
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
        <div>
          <div onClick={() => changeLanguageHandler('fr')}>
            <SvgfRFlag />
          </div>
          <div onClick={() => changeLanguageHandler('en')}>
            <SvgGBFlag />
          </div>
        </div>
      </ButtonsSection>
    </Container>
  );
}

export default Navigation;
