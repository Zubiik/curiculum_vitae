import styled from '@emotion/styled';
import Star from '../SvgStar';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomStar = styled(Star)`
  display: flex;
  margin-left: 5px;
  fill: ${({ theme }) => theme.colors.gold};
  stroke: ${({ theme }) => theme.colors.gold};
`;
export const FillCustom = styled(Star)`
  display: flex;
  margin-left: 5px;
  fill: white;
  stroke: ${({ theme }) => theme.colors.gold};
`;
