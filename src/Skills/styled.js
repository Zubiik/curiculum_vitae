import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 20px;
  margin: 10px;
  width: 300px;
  border-radius: 20px;
  background: ${({ theme }) => theme.lightColors.lightWhite};
`;

export const StarsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleCustom = styled.h3`
  color: ${({ theme }) => theme.colors.puce};
`;
export const GreenTitleCustom = styled.h3`
  color: ${({ theme }) => theme.colors.emerald};
`;
export const BoldText = styled.p`
  font-weight: bold;
`;
