import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media all and (max-width: 480px) {
    width: 80%;
    
  }
`;
export const SectionContainer = styled.div`
  background: ${({ theme }) => theme.lightColors.lightWhite};
  padding: 40px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const RightSectionContainer = styled.div`
  padding: 40px;
`;

export const SectionShadowContainer = styled.div`
  display: flex;
  @media all and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;
export const SectionWithoutShadowContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media all and (max-width: 480px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const LeftTextSection = styled.p`
  margin-left: 40px;
`;
export const RightTextSection = styled.p`
  margin-right: 40px;
  text-align: right;
  @media all and (max-width: 480px) {
    text-align: left;
  }
`;

export const ImgCustom = styled.img`
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
  color: ${({ theme }) => theme.colors.emerald};
`;
export const TechnoCustom = styled.p`
  min-width: 50px;
  max-width: 100px;
  text-align: center;
  font-weight: bold;
  margin-right: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.slateGray};
  color: ${({ theme }) => theme.lightColors.isabeline};
  border-radius: 20px;
  @media all and (max-width: 480px) {
    display: none;
  }
`;
export const RightTechnoCustom = styled(TechnoCustom)`
  margin-left: 10px;
  margin-right: 0;
`;
export const ContainerTechno = styled.div`
  display: flex;
`;
export const ContainerTechnoRight = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
