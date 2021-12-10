import styled from "@emotion/styled";

export const CustomButton = styled.button`
  border-radius: 40px;
  background-color: #1B2932;
  border: #3F8D6C 4px solid;
  max-height: 50px;
  min-width: 100px;
  margin: 4px;
  color: #3F8D6C;
  & {
    transition-duration: 0.4s;
  }

  &:hover {
    color: #1B2932;
    background-color: #3F8D6C;
  }
`;
