import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.lightColors.isabeline};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 15px 10px -15px;
`;
export const ParcoursContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media all and (max-width: 480px) {
    width: 100%;
  }
`;
export const ImageCustom = styled.img`
  @media all and (max-width: 480px) {
    display: none;
  }
`;
