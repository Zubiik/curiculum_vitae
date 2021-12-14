import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
export const SectionContainer = styled.div`
`;
export const RightSectionContainer = styled.div`
`;
export const SectionShadowContainer = styled.div`
  display: flex;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const SectionWithoutShadowContainer = styled.div`
  display: flex;
  padding: 10px;
`;

export const LeftTextSection = styled.p`
  padding-right: 5px;
  padding-left: 5px;
`;
export const RightTextSection = styled.p`
  padding-right: 10px;
  text-align: right;
`;

export const ImgCustom = styled.img`
  margin: 20px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;
export const TextCustom = styled.span`
  font-size: 30px;
  color: ${({ theme }) => theme.lightColors.beauBlue};
`;
