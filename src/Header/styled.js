import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 600px;
  @media all and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const ProfilPicture = styled.img`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const TextCustom = styled.div`
  color: #c37455;
  font-size: 40px;
`;
