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
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f2f2f2;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 15px 10px -15px;
  
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 800px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 40px;
  margin: 20px;
  border-radius: 20px;
  background: ${({ theme }) => theme.lightColors.lightWhite};
   @media all and (max-width: 480px) {
  margin: unset;
  padding: 10px;

  } 
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StarsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  
`;

export const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
 
`;

export const BoxOfParts = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  @media all and (max-width: 480px) {
  display: flex;
  flex-direction: column;
    
  } 
  
`;

export const SkillLabel = styled.p`
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  @media all and (max-width: 480px) {
  white-space: unset;
  overflow: unset;
  text-overflow: unset;
  font-weight: bold;
  } 
`;

export const TitleSize = styled.h3`
  font-size: 24px;
`;

export const TitleCustom = styled(TitleSize)`
  color: ${({ theme }) => theme.colors.puce};
`;

export const GreenTitleCustom = styled(TitleSize)`
  color: ${({ theme }) => theme.colors.emerald};
`;

export const GoldTitleCustom = styled(TitleSize)`
  color: ${({ theme }) => theme.colors.gold};
`;

export const BoldText = styled.span`
  margin-bottom: 10px;
  font-weight: bold;
`;
export const EnvInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`;

export const CustomTextLine = styled.div`
  margin-bottom: 10px;
`;

export const ImageCustom = styled.img`
  height: 150px;
  @media all and (max-width: 480px) {
    display: none;
  } 
`;

export const ImageAndBoxCustom = styled.div`
  padding: 40px;
  display: flex;
  align-items: center;

  :hover {
    animation: ${bounce} 1s ease;
  }
`;
export const ImageAndBoxCustomLeft = styled(ImageAndBoxCustom)`
  padding-right: 30px;
  display: flex;
  flex-direction: row-reverse;
`;
