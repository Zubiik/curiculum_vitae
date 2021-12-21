import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 40px;
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.lightColors.isabeline};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;
export const ParcoursContainer = styled.div`
  width: 100%;
  display: flex;
  @media all and (max-width: 480px) {
    width: 100%;
  }
`;
export const ImageCustom = styled.img`
  margin-right: 40px;
  @media all and (max-width: 480px) {
    display: none;
  }
`;
