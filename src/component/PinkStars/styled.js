import styled from "@emotion/styled";
import Star from "../SvgStar";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const StarCustom = styled(Star)`
  display: flex;
  margin-left: 5px;
  fill: ${({ theme }) => theme.colors.puce};
  stroke: ${({ theme }) => theme.colors.puce}; ;
`;
export const FillCustom = styled(Star)`
  display: flex;
  margin-left: 5px;
  fill: white;
  stroke: ${({ theme }) => theme.colors.puce};
  
`;
