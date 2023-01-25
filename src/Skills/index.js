/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  BoxContainer,
  TitleCustom,
  CustomTextLine,
  StarsContainer,
  GreenTitleCustom,
  BoldText,
  EnvInfos,
  Container,
  ImageCustom,
  ImageAndBoxCustom,
  ImageAndBoxCustomLeft,
  GoldTitleCustom,
  LeftPart,
  RightPart,
  BoxOfParts,
  SkillLabel,
  TextContainer,
} from './styled';
import PinkStars from '../component/PinkStars';
import GreenStars from '../component/GreenStars';
import frontEndImg from '../images/front-end.png';
import design from '../images/design-icon.png';
import workflow from '../images/workflow.png';

function Skills() {
  const { t } = useTranslation();

  return (
    <Container>
      <ImageAndBoxCustom>
        <BoxContainer>
          <TextContainer>
            <TitleCustom>Front-End</TitleCustom>
            <p>{t('frontEndText')}</p>
          </TextContainer>

          <BoxOfParts>
            <LeftPart>
              <StarsContainer>
                <SkillLabel>React</SkillLabel>
                <PinkStars level={[1, 2, 3, 4, null]} />
              </StarsContainer>
              <StarsContainer>
                <SkillLabel>Html 5</SkillLabel>
                <PinkStars level={[1, 2, 3, 4, 5]} />
              </StarsContainer>
              <StarsContainer>
                <SkillLabel>Javascript</SkillLabel>
                <PinkStars level={[1, 2, 3, null, null]} />
              </StarsContainer>
            </LeftPart>
            <RightPart>
              <StarsContainer>
                <SkillLabel>React native</SkillLabel>
                <PinkStars level={[1, 2, 3, 4, null]} />
              </StarsContainer>
              <StarsContainer>
                <SkillLabel>React testing library</SkillLabel>
                <PinkStars level={[1, 2, null, null, null]} />
              </StarsContainer>
              <StarsContainer>
                <SkillLabel>Json</SkillLabel>
                <PinkStars level={[1, 2, 3, null, null]} />
              </StarsContainer>
            </RightPart>
          </BoxOfParts>
        </BoxContainer>
        <ImageCustom src={frontEndImg} alt="frontEnd icon" />
      </ImageAndBoxCustom>

      <ImageAndBoxCustomLeft>
        <BoxContainer>
          <TextContainer>
            <GoldTitleCustom>Design</GoldTitleCustom>
            <p>{t('figmaText')}</p>
          </TextContainer>
          <BoxOfParts>
            <LeftPart>
              <StarsContainer>
                <SkillLabel>Figma</SkillLabel>
                <GreenStars level={[1, 2, 3, null, null]} />
              </StarsContainer>

              <StarsContainer>
                <SkillLabel>Maquettage</SkillLabel>
                <GreenStars level={[1, 2, null, null, null]} />
              </StarsContainer>
            </LeftPart>
            <RightPart>
              <StarsContainer>
                <SkillLabel>Prototypage</SkillLabel>
                <GreenStars level={[1, 2, 3, null, null]} />
              </StarsContainer>
            </RightPart>
          </BoxOfParts>
        </BoxContainer>
        <ImageCustom src={design} alt="design icon" />
      </ImageAndBoxCustomLeft>

      <ImageAndBoxCustom>
        <BoxContainer>
          <TextContainer>
            <GreenTitleCustom>{t('workingEnvironment')}</GreenTitleCustom>
          </TextContainer>
          <EnvInfos>
            <CustomTextLine>
              <BoldText>{t('operatingSystem')} </BoldText>MacOS
            </CustomTextLine>

            <CustomTextLine>
              <BoldText>Workflow:</BoldText> Vs Code,Postman,Git, yarn
            </CustomTextLine>

            <CustomTextLine>
              <BoldText>IDE: </BoldText> Visual Studio Code
            </CustomTextLine>
          </EnvInfos>
        </BoxContainer>
        <ImageCustom src={workflow} alt="workflow icon" />
      </ImageAndBoxCustom>
    </Container>
  );
}

export default Skills;
