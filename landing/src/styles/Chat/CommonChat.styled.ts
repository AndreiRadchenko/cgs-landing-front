import styled from "styled-components";
import themes from "../../utils/themes";
import chatOpenButtonIcon from "../../../public/chatOpenButtonIcon.png";
import chatCloseButtonIcon from "../../../public/chatCloseButtonIcon.svg";

export const ChatButton = styled.button`
  position: relative;
  display: block;
  height: 55px;
  width: 55px;
  border: 1.8px solid ${themes.primary.colors.primary};
  border-bottom: none;
  border-left: none;

  &::before,
  &::after {
    content: "";
    border: 1.8px solid ${themes.primary.colors.primary};
    position: absolute;

    background: ${themes.primary.colors.mainGradientColor2};
    transform: skew(-45deg);
    transform-origin: top;
  }

  &::before {
    top: 2px;
    left: -7px;
    width: 5px;
    height: 96%;
    transform: skewY(-45deg);
  }

  &::after {
    bottom: -6px;
    left: 1px;
    width: 99%;
    height: 5px;
  }
`;

interface IChatButtonIcon {
  isOpen?: boolean;
}

export const ChatButtonIcon = styled.div<IChatButtonIcon>`
  width: 100%;
  height: 100%;
  background-image: ${({ isOpen }) =>
    isOpen
      ? `url(${chatCloseButtonIcon.src})`
      : `url(${chatOpenButtonIcon.src})`};
  background-repeat: no-repeat;
  background-position: center;
`;
