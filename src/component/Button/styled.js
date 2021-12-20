import styled from "@emotion/styled";

export const CustomButton = styled.div`
  border: ${({ theme }) => theme.lightColors.lightWhite};
  max-height: 50px;
  max-height: 50px;
  min-width: 100px;
  margin: 4px;
  color: ${({ theme }) => theme.lightColors.lightWhite};
  & {
    transition-duration: 0.4s;
  }
  font-weight: bold;
  &:hover {
    color: ${({ theme }) => theme.colors.copperRed};
  }
  @media all and (max-width: 480px) {
    font-size: 11px;
    min-width: 50px;
  }
`;
