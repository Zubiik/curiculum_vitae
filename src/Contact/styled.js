import styled from "@emotion/styled";
import Box from "../component/Box";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  @media all and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;
export const BoxCustom = styled(Box)`
  display: flex;
  width: 300px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: rgba(94, 120, 135, 0.3);
  position: relative;
`;
export const TextCustom = styled.span`
  color: ${({ theme }) => theme.colors.slateGray};
  font-weight: bold;
`;
export const PinkBoxCustom = styled(BoxCustom)`
  background: rgba(204, 136, 153, 0.3);
`;
export const GreenBoxCustom = styled(BoxCustom)`
  background: rgba(63, 141, 108, 0.3);
`;
export const InlineTextCustom = styled.span`
  color: ${({ theme }) => theme.colors.puce};
  padding: 4px;
`;

export const GreenTextCustom = styled(InlineTextCustom)`
  color: ${({ theme }) => theme.colors.emerald};
`;
export const GreyTextCustom = styled(InlineTextCustom)`
  color: ${({ theme }) => theme.colors.gunMetal};
`;
export const ImageCustom = styled.div``;

export const ToolTip = styled.span``;
