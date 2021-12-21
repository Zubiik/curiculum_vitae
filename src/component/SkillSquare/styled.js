import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media all and (max-width: 480px) {
    display: flex;
    align-items: flex-start;
  }
`;

export const SquaresContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 40%;
  margin: 40px;
  @media all and (max-width: 480px) {
    width: 100%;
    margin:0;
  }
`;
export const Square = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
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
`;

export const TextSquare = styled.div`
  font-size: 20px;
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
