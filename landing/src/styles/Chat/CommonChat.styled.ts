import styled from "styled-components";
import themes from "../../utils/themes";
import chatOpenButtonIcon from "../../../public/chatOpenButtonIcon.png";
import chatCloseButtonIcon from "../../../public/chatCloseButtonIcon.svg";
import messageBubbleCloseIcon from "../../../public/messageBubbleCloseIcon.svg";
import { glow, horizontalGlow } from "../Animations.styled";

export const ChatWrapper = styled.div`
  position: relative;
`;

export const ChatButton = styled.div`
  cursor: pointer;
  position: relative;
  display: block;

  writing-mode: vertical-rl;
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

  @media ${themes.primary.media.maxMobile} {
    width: 18vw;
    height: 60px;

    border: 1.8px solid ${themes.primary.colors.primary};
    background: linear-gradient(
      180deg,
      ${themes.primary.colors.mainGradientColor1},
      ${themes.primary.colors.mainGradientColor2},
      ${themes.primary.colors.mainGradientColor1}
    );
    background-size: auto 400%;
    animation: ${glow} 12s linear infinite;
  }

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

    @media ${themes.primary.media.maxMobile} {
      top: -7px;
      left: -1px;
      width: 100%;
      height: 4px;

      background: linear-gradient(
        90deg,
        ${themes.primary.colors.mainGradientColor1},
        ${themes.primary.colors.mainGradientColor2}
      );
      transform: skewY(0) rotate(0deg);
    }
  }

  &::after {
    bottom: -6.5px;
    left: 0.5px;
    width: 99%;
    height: 5px;

    @media ${themes.primary.media.maxMobile} {
      display: none;
    }
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

export const NewMessageCounter = styled.div`
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  writing-mode: horizontal-tb;
  font-size: 1rem;
  color: ${themes.primary.colors.primary};

  border-radius: 50%;
  border: 1px solid ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.portfolioHover};
`;

export const MessageBable = styled.div`
  position: absolute;
  bottom: -0.4rem;
  right: 5.5rem;
  width: 12.525rem;
  height: 4rem;
  padding: 0.875rem;

  font-size: 0.75rem;

  border-radius: 0.5rem;
  border: 1px solid ${themes.primary.colors.primary};
  box-shadow: 0.3rem 0.3rem 0rem 0rem ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.secondary};

  @media ${themes.primary.media.maxMobile} {
    bottom: 5.25rem;
    right: 0.6rem;
  }

  :after,
  :before {
    content: "";
    position: absolute;
    display: block;
    top: 52%;

    background-color: ${themes.primary.colors.secondary};
    transform: translateY(-50%);
  }

  :after {
    right: -0.4rem;
    width: 1rem;
    height: 1rem;
    border: 1px solid ${themes.primary.colors.primary};
    box-shadow: 0.35rem 0rem 0rem 0rem ${themes.primary.colors.primary};
    transform: translateY(-50%) rotate(25deg) skewX(-35deg);

    @media ${themes.primary.media.maxMobile} {
      right: 1rem;
      top: 98%;
      box-shadow: 0.05rem 0.23rem 0rem 0rem ${themes.primary.colors.primary};
      transform: translateY(-50%) rotate(-63deg) skewX(-35deg);
    }
  }

  :before {
    right: 0;
    width: 1.25rem;
    height: 2rem;
    z-index: 1;

    @media ${themes.primary.media.maxMobile} {
      right: 0.7rem;
      top: 74%;
      width: 1.45rem;
    }
  }
`;

export const MessageBubbleCloseIcon = styled.div`
  position: absolute;
  top: -0.675rem;
  left: -0.675rem;
  width: 1.35rem;
  height: 1.35rem;

  border: 1px solid ${themes.primary.colors.primary};
  border-radius: 50%;
  background-color: ${themes.primary.colors.secondary};
  background-image: url(${messageBubbleCloseIcon.src});
  background-position: center;
  background-repeat: no-repeat;
`;
