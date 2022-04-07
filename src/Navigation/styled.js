import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 1;
  @media all and (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const TextCustom = styled.span`
  color: ${({ theme }) => theme.colors.copperRed};
  font-weight: bold;
  @media all and (max-width: 480px) {
    display: none;
  }
`;
export const ButtonsSection = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
`;

export const TitleCustom = styled.div`
  width: 30%;
  font-size: 30px;
  padding-left: 30px;
  @media all and (max-width: 480px) {
    display: none;
  }
`;
