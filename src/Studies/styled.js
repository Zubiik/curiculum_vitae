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
  height: 300px;
  margin-right: 40px;
  @media all and (max-width: 480px) {
    display: none;
  }
`;
export const BoxCustom = styled.div`
  display: flex;
  align-items: center;
  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  background: ${({ theme }) => theme.lightColors.lightWhite};
`;
