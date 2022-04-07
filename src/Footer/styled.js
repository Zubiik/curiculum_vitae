import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gunMetal};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  align-items: center;
  margin-top: 50px;
  color: ${({ theme }) => theme.lightColors.lightWhite};
`;
