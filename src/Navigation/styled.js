import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gunMetalAlpha};
  display: flex;
  width: 100%;
  height: 90px;
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
  color: ${({ theme }) => theme.lightColors.isabeline};
  @media all and (max-width: 480px) {
    display: none;
  }
`;
export const ButtonsSection = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  @media all and (max-width: 480px) {
  }
`;

export const TitleCustom = styled.div`
  width: 30%;
  font-size: 40px;
`;
