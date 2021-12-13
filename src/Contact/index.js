import React from "react";
import Box from "../component/Box";
import {
  ImageCustom,
  PinkBoxCustom,
  GreenBoxCustom,
  Container,
  BoxCustom,
  PinkTextCustom,
  GreenTextCustom,
  TextCustom
} from "./styled";
import phoneIcon from "../images/phoneIcon.png";
import mailIcon from "../images/mailIcon.png";

function Contact() {
  return (
    <Container>
      <BoxCustom>
        <TextCustom>Vous souhaitez me rencontrer?</TextCustom>
        <span> chamonix alentours</span>
      </BoxCustom>
      <GreenBoxCustom>
        <ImageCustom src={mailIcon} alt="mail icon" />
        <GreenTextCustom>elodiefrappat@gmail.com</GreenTextCustom>
      </GreenBoxCustom>
      <PinkBoxCustom>
        <ImageCustom src={phoneIcon} alt="phone icon" />
        <PinkTextCustom>06.06.6.60.60</PinkTextCustom>
      </PinkBoxCustom>
    </Container>
  );
}

export default Contact;
