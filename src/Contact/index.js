import React, { useState } from "react";
import Box from "../component/Box";
import {
  ImageCustom,
  PinkBoxCustom,
  GreenBoxCustom,
  Container,
  BoxCustom,
  InlineTextCustom,
  GreenTextCustom,
  TextCustom,
  GreyTextCustom,
} from "./styled";
import phoneIcon from "../images/phoneIcon.png";
import mailIcon from "../images/mailIcon.png";
import tippy from "tippy.js";

const Contact = () => {
  const textToCopy = "elodiefrappat@gmail.com";
  const phoneToCopy = "06.06.06.25.02";

  const copyHandler = () => {
    navigator.clipboard.writeText(textToCopy);
    tippy("#myText", {
      trigger: "click",
      theme: 'light',
    });
  };

  return (
    <Container>
      <BoxCustom>
        <TextCustom>Vous souhaitez me rencontrer?</TextCustom>
        <GreyTextCustom> Je suis disponible sur Chamonix</GreyTextCustom>
      </BoxCustom>
      <GreenBoxCustom>
        <ImageCustom>
          <img src={mailIcon} alt="mail icon" />
        </ImageCustom>

        <GreenTextCustom
          id="myText"
          data-tippy-content="copied!"
          onClick={copyHandler}
        >
          {textToCopy}
        </GreenTextCustom>
      </GreenBoxCustom>
      <PinkBoxCustom>
        <ImageCustom>
          <img src={phoneIcon} alt="phone icon" />
        </ImageCustom>
        <InlineTextCustom
          onClick={copyHandler}
          data-tippy-content="copied"
          id="myText"
        >
          {phoneToCopy}
        </InlineTextCustom>
      </PinkBoxCustom>
    </Container>
  );
}

export default Contact;
