import React from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  TextContainer,
  TextCustom,
  ProfilPicture,
  SmallerTextCustom,
} from "./styled";
import pdp from "../images/photo.jpg";

function Header() {
  const circleText = "Développeuse Web front-end ";
  const { t } = useTranslation();

  return (
    <Container>
      <div>{t("home.hello")}</div>

      <TextContainer>
        <TextCustom>{circleText}</TextCustom>
        <SmallerTextCustom>
          Actuellement à la recherche d'un nouvel emploi, je suis intéressée par
          les postes de :
          <SmallerTextCustom>
            Développeuse front-end & Intégratrice web
          </SmallerTextCustom>
        </SmallerTextCustom>
      </TextContainer>
      <ProfilPicture src={pdp} alt="PDP" />
    </Container>
  );
}

export default Header;
