import styled from "@emotion/styled";

export const CustomButton = styled.button`
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.gunMetal};
  border: ${({ theme }) => theme.colors.emerald} 4px solid;
  max-height: 50px;
  min-width: 100px;
  margin: 4px;
  color: ${({ theme }) => theme.colors.emerald};
  & {
    transition-duration: 0.4s;
  }
  font-weight: bold;
  &:hover {
    color: ${({ theme }) => theme.colors.gunMetal};
    background-color: ${({ theme }) => theme.colors.emerald};
  }
  @media all and (max-width: 480px) {
    font-size: 11px;
    margin: 0;
  }
`;
