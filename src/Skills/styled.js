import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  background-color: #F2F2F2 ;
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
  &{
     animation: bounce 0.7s ease infinite;
}

@keyframes bounce{
     from {top: 106px;}
     50%  {top: 86px;}
     to   {top: 106px;}
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
