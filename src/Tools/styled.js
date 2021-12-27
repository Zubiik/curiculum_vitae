import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media all and (max-width: 480px) {
    display: flex;
    align-items: flex-start;
  }
`;

export const SquaresContainer = styled.div`
  width: 90%; 
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 40px;
  @media all and (max-width: 480px) {
    width: 100%;
    margin: 0;
  }

`;
