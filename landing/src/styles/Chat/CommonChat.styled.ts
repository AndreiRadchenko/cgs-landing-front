import styled from "styled-components";
import themes from "../../utils/themes";
import chatOpenButtonIcon from "../../../public/chatOpenButtonIcon.png";
import chatCloseButtonIcon from "../../../public/chatCloseButtonIcon.svg";
import { horizontalGlow } from "../Animations.styled";

export const ChatWrapper = styled.div`
  position: relative;
`;

export const ChatButton = styled.div`
  cursor: pointer;
  position: relative;
  display: block;

  writing-mode: vertical-rl !important;
  text-orientation: mixed;
  line-height: 99%;
  font-size: 1.8333em;
  padding: 0.8em 0.72em;
  color: transparent;

  border: 1.8px solid ${themes.primary.colors.primary};
  border-bottom: none;
  border-left: none;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.mainGradientColor1},
    ${themes.primary.colors.mainGradientColor2},
    ${themes.primary.colors.mainGradientColor1}
  );
  background-size: 200% auto;
  animation: ${horizontalGlow} 6s linear infinite;

  &::before,
  &::after {
    content: "";
    position: absolute;

    border: 1.8px solid ${themes.primary.colors.primary};
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
    background: linear-gradient(
      ${themes.primary.colors.mainGradientColor1},
      ${themes.primary.colors.mainGradientColor2}
    );
  }

  &::after {
    bottom: -6.5px;
    left: 0.5px;
    width: 99%;
    height: 5px;
  }
`;

interface IChatButtonIcon {
  isOpen?: boolean;
}

export const ChatButtonIcon = styled.div<IChatButtonIcon>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: transparent;
  background-image: ${({ isOpen }) =>
    isOpen
      ? `url(${chatCloseButtonIcon.src})`
      : `url(${chatOpenButtonIcon.src})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${({ isOpen }) => (isOpen ? "21px" : `35px 32px`)};
`;
