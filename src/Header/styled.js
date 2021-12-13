import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 600px;
  /* border:1px red solid; */
`;
export const TextContainer = styled.div`
  align-items: center;
`;

export const CircleContainer = styled.div`
  /* border-top-left-radius: 400px;
  border-bottom-left-radius: 400px;
  background: #1b2932;
  min-width: 30%;
  padding: 20px;
  margin-top: 5%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
`;
export const ImageCercle = styled.img`
  width: 340px;
  height: 340px;
  border-radius: 300px;
  border-radius: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const TextCustom = styled.div`
  color: #c37455;
  font-size: 40px;
`;
