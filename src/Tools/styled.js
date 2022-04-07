import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const LineSquaresCustom = styled.div`
  display: flex;
  @media all and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SquaresContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 40px;
  @media all and (max-width: 480px) {
    margin: 0;
    display: flex;
    justify-content: center;
  }
`;
