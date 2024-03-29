/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  TextContainer,
  TextCustom,
  ProfilPicture,
  SmallerTextCustom,
} from './styled';
import avatar from '../images/avatar.png';
import '../configs/i18n';

function Header() {
  const { t } = useTranslation();

  return (
    <Container>
      <TextContainer>
        <TextCustom>{t('job')}</TextCustom>
        <SmallerTextCustom>{t('introduction')}</SmallerTextCustom>
        <SmallerTextCustom>
          {t('frontEndDev')} & {t('WebIntegrator')}
        </SmallerTextCustom>
      </TextContainer>
      <ProfilPicture src={avatar} alt="PDP" />
    </Container>
  );
}

export default Header;
