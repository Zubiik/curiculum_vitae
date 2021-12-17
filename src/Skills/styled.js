import styled from "@emotion/styled";

import { keyframes } from "@emotion/react";

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

export const Container = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 15px 10px -15px;
`;
export const BoxContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  background: ${({ theme }) => theme.lightColors.lightWhite};
  @media all and (max-width: 480px) {
    width: 100%;
  }
`;

export const StarsContainer = styled.div`
  display: flex;
`;

export const TitleCustom = styled.h3`
  color: ${({ theme }) => theme.colors.puce};
`;
export const GreenTitleCustom = styled.h3`
  color: ${({ theme }) => theme.colors.emerald};
`;
export const GoldTitleCustom = styled.h3`
  color: ${({ theme }) => theme.colors.gold};
`;


export const BoldText = styled.span`
  margin-bottom: 10px;
  font-weight: bold;
`;
export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CustomTextLine = styled.div`
  margin-bottom: 10px;
`;

export const ImageCustom = styled.img`
  height: 150px;
  :hover {
    animation: ${bounce} 1s ease;
  }
  @media all and (max-width: 480px) {
    display: none;
  }
`;

export const ImageAndBoxCustom = styled.div`
  display: flex;
  align-items: center;
`;
export const ImageAndBoxCustomLeft = styled(ImageAndBoxCustom)`
  display: flex;
  flex-direction: row-reverse;
`;
