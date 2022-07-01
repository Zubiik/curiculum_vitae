import React from 'react';
import { Container, ParcoursContainer, ImageCustom, BoxCustom } from './styled';
import figmaImage from '../images/ex.png';

function Studies() {
  return (
    <Container>
      <ParcoursContainer>
        <ImageCustom src={figmaImage} alt="i" />
        <BoxCustom>
          <p>
            Développeuse web junior, je me suis formée durant 1 an en
            autoditacte Après une formation dans le tourisme j’ai souhaitée me
            reconvertir dans le métier de développeuse web. En une année de
            formation j’ai pu me penché sur /voir/ front end quelque notion en
            Design environnement de test.
          </p>
          <p>
            Pour mon apprentissage j’ai pu me servir de cours en ligne tel que
            open classroom udemy et en parrallèle réaliser des projets personnel
            visible dans mon porfolio.
          </p>
        </BoxCustom>
      </ParcoursContainer>
    </Container>
  );
}

export default Studies;
