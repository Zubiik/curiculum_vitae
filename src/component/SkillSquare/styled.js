import styled from "@emotion/styled";

export const Square = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  &:hover {
    -ms-transform: scale(1.1); /* IE 9 */
    -webkit-transform: scale(1.1); /* Safari 3-8 */
    transform: scale(1.1);
  }
`;

export const ZoomSquare = styled.img`
  position: relative;
  width: 90px;
  height: 90px;
`;

export const TextSquare = styled.a`
  font-size: 14px;
  font-weight: bold;
  background: rgba(94, 120, 135, 0.52);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  z-index: 1;
  opacity: 0;
  position: absolute;
  color: ${({ theme }) => theme.lightColors.lightWhite};
  &:hover {
    opacity: 100%;
  }
`;
