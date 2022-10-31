/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTranslation } from 'react-i18next';
import SiteLink from '../component/SiteLink';
import netflixLike from '../images/netflixLike.png';
import authentic from '../images/authentic-ICON.png';
import pokedex from '../images/Pokedex-ICON.png';

import {
  Container,
  ImgCustom,
  RightTextSection,
  SectionContainer,
  LeftTextSection,
  TextCustom,
  SectionShadowContainer,
  RightSectionContainer,
  SectionWithoutShadowContainer,
  TechnoCustom,
  ContainerTechno,
  ContainerTechnoRight,
  RightTechnoCustom,
} from './styled';

function Portfolio() {
  const { t } = useTranslation();

  return (
    <Container>
      <SectionContainer>
        <SectionShadowContainer>
          <img src={netflixLike} alt="phonesView" />
          <LeftTextSection>
            <TextCustom>MDMB Frontend</TextCustom>
            <SiteLink link={'https://netflix-copy-xi.vercel.app/'} />

            <p>{t('mdmbText')}</p>
            <ContainerTechno>
              <TechnoCustom>React</TechnoCustom>
              <TechnoCustom>Storybook</TechnoCustom>
              <TechnoCustom>JEST</TechnoCustom>
              <TechnoCustom>jsDoc</TechnoCustom>
              <TechnoCustom>Figma</TechnoCustom>
            </ContainerTechno>
          </LeftTextSection>
        </SectionShadowContainer>
      </SectionContainer>

      <RightSectionContainer>
        <SectionWithoutShadowContainer>
          <RightTextSection>
            <TextCustom>Pokedex</TextCustom>
            <SiteLink link={'https://pokedex-psi-taupe.vercel.app/'} />
            <p>{t('pokedex')}</p>
            <ContainerTechnoRight>
              <RightTechnoCustom>React</RightTechnoCustom>
              <RightTechnoCustom>Figma</RightTechnoCustom>
            </ContainerTechnoRight>
          </RightTextSection>
          <ImgCustom src={pokedex} alt="podexView" />
        </SectionWithoutShadowContainer>
      </RightSectionContainer>

      <SectionContainer>
        <SectionShadowContainer>
          <img src={authentic} alt="phoneView" />
          <LeftTextSection>
            <TextCustom>Authentic fleurs</TextCustom>
            <SiteLink link={'https://www.authenticfleurs.com/'} />
            <p>{t('authenticText')}</p>
            <TechnoCustom>Wix</TechnoCustom>
          </LeftTextSection>
        </SectionShadowContainer>
      </SectionContainer>
    </Container>
  );
}

export default Portfolio;
