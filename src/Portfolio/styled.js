import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  @media all and (max-width: 480px) {
    width: 80%;
  }
`;
export const SectionContainer = styled.div``;

export const RightSectionContainer = styled.div``;

export const SectionShadowContainer = styled.div`
  display: flex;
  padding: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media all and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;
export const SectionWithoutShadowContainer = styled.div`
  display: flex;
  padding: 10px;
  @media all and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LeftTextSection = styled.p`
  padding-right: 5px;
  padding-left: 5px;
`;
export const RightTextSection = styled.p`
  padding-right: 10px;
  text-align: right;
  @media all and (max-width: 480px) {
    text-align: left;
  }
`;

export const ImgCustom = styled.img`
  margin: 20px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  @media all and (max-width: 480px) {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
  }
`;
export const TextCustom = styled.span`
  font-size: 30px;
  color: ${({ theme }) => theme.lightColors.beauBlue};
`;
