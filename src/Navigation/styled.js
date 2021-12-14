import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gunMetal};
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
`;
export const TextCustom = styled.p`
  color: ${({ theme }) => theme.colors.slateGray};
  padding: 10px;
`;
export const ButtonsSection = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
`;

export const TitleCustom = styled.div`
  width: 30%;
  font-size: 40px;
`;
