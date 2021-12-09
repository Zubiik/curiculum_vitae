import styled from "@emotion/styled";

export const CustomButton = styled.button`
  border-radius: 40px;
  background-color: black;
  border: #dcb253 4px solid;
  max-height: 50px;
  min-width: 100px;
  margin: 4px;
  color: #dcb253;
  & {
    transition-duration: 0.4s;
  }

  &:hover {
    color: black;
    background-color: #dcb253;
  }
`;
