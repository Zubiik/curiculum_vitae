import React from 'react';
import tippy from 'tippy.js';
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
} from './styled';
import phoneIcon from '../images/phoneIcon.png';
import mailIcon from '../images/mailIcon.png';

const Contact = () => {
  const textToCopy = 'elodiefrappat08@gmail.com';
  const phoneToCopy = '06.25.09.99.12';

  const copyHandler = () => {
    navigator.clipboard.writeText(textToCopy);
    tippy('#myText', {
      trigger: 'click',
      theme: 'light',
    });
  };

  return (
    <Container>
      <BoxCustom>
        <TextCustom>Vous souhaitez me rencontrer?</TextCustom>
        <GreyTextCustom> Chamonix et alentours</GreyTextCustom>
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
};

export default Contact;
