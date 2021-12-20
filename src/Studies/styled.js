import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.lightColors.isabeline};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
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
  margin-left: 40px;
  margin-right: 40px;
  @media all and (max-width: 480px) {
    display: none;
  }
`;
