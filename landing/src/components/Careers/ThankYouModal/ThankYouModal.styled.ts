import styled from "styled-components";
import themes from "../../../utils/themes";

interface IModal {
  isOpen?: boolean;
}

export const ThankYouModal = styled.div<IModal>`
  display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ThankYouModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ThankYouModalContent = styled.div`
  width: 613px;
  height: 388px;
  background: ${themes.primary.colors.grayBack};
  position: relative;
`;

export const ThankContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin: 0 55px 0 55px;
`;

export const ThankMessage = styled.span`
  font-size: 32px;
  font-weight: ${themes.primary.font.weight.heavy};
`;

export const CloseButton = styled.img`
  margin: 66px 46px 0 0;
  width: 22px;
  height: 22px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;

export const Thing = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Cube = styled.img`
  width: 38px;
  height: 38px;
  position: absolute;
  bottom: 32px;
  right: 98px;
  z-index: 2;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: -1;
  margin-top: 12px;
  margin-left: 12px;
  border: 2px solid black;
`;

export const BlackBox = styled.div`
  width: 100%;
  height: 50%;
  background: black;
`;

export const WhiteBox = styled.div`
  width: 100%;
  height: 50%;
  background: white;
`;
