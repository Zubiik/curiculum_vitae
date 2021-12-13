import styled from "@emotion/styled";
import Box from "../component/Box";

export const Container = styled.div`
  display: flex;
`;
export const BoxCustom = styled(Box)`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: rgba(94, 120, 135, 0.3);
`;
export const TextCustom = styled.span`
  color: #5E7887;
`;
export const PinkBoxCustom = styled(BoxCustom)`
  background: rgba(204, 136, 153, 0.3);
`;
export const PinkTextCustom = styled.span`
  color: #cc8899;
`;

export const GreenBoxCustom = styled(BoxCustom)`
  background: rgba(63, 141, 108, 0.3);
`;
export const GreenTextCustom = styled.span`
  color: #3f8d6c;
`;
export const ImageCustom = styled.img``;
