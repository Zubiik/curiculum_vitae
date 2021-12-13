import styled from "@emotion/styled";

export const BoxContainer = styled.div`
  width: 80%;
  display: flex;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-x: scroll;
  border-radius: 20px;
  background: #c4c4c447;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
`;

export const ParcoursContainer = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  justify-content: center;
  align-items: center;
`;
