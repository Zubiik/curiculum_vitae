import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 500px;
  @media all and (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media all and (max-width: 480px) {
    width: 90%;
  }
  `;

export const ProfilPicture = styled.img`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  `;

export const TextCustom = styled.div`
  color: ${({ theme }) => theme.colors.copperRed};
  font-size: 40px;
  font-weight: bold;
 
`;
export const SmallerTextCustom = styled.p`
  color: ${({ theme }) => theme.colors.slateGray};
  font-size: 25px;
`;
