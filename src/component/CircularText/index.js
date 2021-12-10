import React from "react";
import { Container, Cercle, CircularText } from "./styled";

function Header() {
  const circularText = "Developpeuse Front-End";
  return (
      <Container>
        {circularText.split("").map((letter, i) => {
          console.log(letter);
  ;
  return (<CircularText >{letter}</CircularText>);
        })}

        {/*<img src={logo} alt="PDP" />*/}
        <Cercle></Cercle>
      </Container>
  );
}

export default Header;
