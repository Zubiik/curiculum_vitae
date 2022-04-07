import styled from '@emotion/styled';

export const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  background: ${({ theme }) => theme.lightColors.lightWhite};
`;
