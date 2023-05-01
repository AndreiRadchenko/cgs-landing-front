import styled from "styled-components";
import themes from "../../utils/themes";
import chatOpenButtonIcon from "../../../public/chatOpenButtonIcon.svg";
import chatCloseButtonIcon from "../../../public/chatCloseButtonIcon.svg";
import messageBubbleCloseIcon from "../../../public/messageBubbleCloseIcon.svg";
import { glow, horizontalGlow } from "../Animations.styled";

export const ChatWrapper = styled.div`
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    &::after {
      content: "";
      left: 2px;
      position: absolute;
      bottom: -6px;
      width: 100%;
      height: 4px;
      border: 1.8px solid ${themes.primary.colors.primary};

      background: ${themes.primary.colors.attachmentIcon};
      transform: skew(45deg);
    }
  }
`;

interface IChatButton {
  isOpen?: boolean;
}

export const ChatButton = styled.div<IChatButton>`
  cursor: pointer;
  position: relative;
  display: block;
  width: 100%;
  height: 55px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 1.8333em;
  padding: 0.8em 0.72em;
  color: transparent;

  border: 1.8px solid ${themes.primary.colors.primary};
  border-right: none;
  border-bottom: none;
  border-left: none;
  background: ${({ isOpen }) =>
    isOpen
      ? themes.primary.colors.blogBackground
      : `linear-gradient(
    180deg,
      ${themes.primary.colors.mainGradientColor1},
      ${themes.primary.colors.mainGradientColor2},
      ${themes.primary.colors.mainGradientColor1})`};

  transform-origin: top;
  background-size: auto 400%;
  animation: ${glow} 12s linear infinite;

  @media ${themes.primary.media.maxMobile} {
    width: 18vw;
    height: 60px;
    border: 1.8px solid ${themes.primary.colors.primary};
    border-right: 0;
    z-index: 10;
    background: ${({ isOpen }) =>
      isOpen
        ? themes.primary.colors.blogBackground
        : `linear-gradient(
    90deg,
    ${themes.primary.colors.mainGradientColor1},
    ${themes.primary.colors.mainGradientColor2},
    ${themes.primary.colors.mainGradientColor1}
  )`};
    background-size: 200% auto;
    animation: ${horizontalGlow} 5s linear infinite;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    border: 1.8px solid ${themes.primary.colors.primary};
    border-radius: 1.5px;
    background: ${themes.primary.colors.mainGradientColor2};
    transform-origin: top;
  }

  &::before {
    top: 1.3px;
    left: -7px;
    width: 5px;
    height: 98%;
    transform: skewY(-45deg);
    background-image: ${() => `linear-gradient(
      180deg,
      ${themes.primary.colors.mainGradientColor1},
      ${themes.primary.colors.mainGradientColor2},
      ${themes.primary.colors.mainGradientColor1})`};
    transform-origin: top;
    background-size: auto 400%;
    animation: ${glow} 12s linear infinite;

    @media ${themes.primary.media.maxMobile} {
      display: none;
    }
    @media (min-width: 1500px) {
      top: 2px;
      height: 101%;
    }
    @media (max-width: 1024px) {
      top: 1px;
    }
  }

  &::after {
    border-right: none;
    right: -8.5px;
    bottom: -7px;
    width: 111.5%;
    height: 5px;
    background: ${themes.primary.colors.attachmentIcon};
    transform: skew(-45deg);

    @media ${themes.primary.media.maxMobile} {
      display: none;
    }
    @media (min-width: 1500px) {
      bottom: -7.5px;
      width: 112%;
    }
    @media (max-width: 1024px) {
      width: 108.5%;
      right: -7.5px;
    }

    @supports (-webkit-hyphens: none) {
      right: -7.5px;
      bottom: -7px;
      width: 115%;

      @media (max-width: 1024px) {
        bottom: -6.7px;
        width: 115%;
        right: -7.5px;
      }
      @media (min-width: 1500px) {
        bottom: -7px;
        width: 111%;
      }
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
  bottom: -1rem;
  right: 6rem;
  width: 215px;
  padding: 0.75rem 0.625rem;

  font-family: "NAMU";
  font-size: 0.875rem;
  line-height: 1.4;

  border-radius: 0.5rem;
  border: 1px solid ${themes.primary.colors.primary};
  box-shadow: 0.3rem 0.3rem 0rem 0rem ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.blogBackground};

  p {
    position: relative;
    margin: 0;
    z-index: 3;
  }

  @media ${themes.primary.media.maxMobile} {
    bottom: 5.25rem;
    right: 0.6rem;
  }

  :after,
  :before {
    content: "";
    position: absolute;
    display: block;
    top: 35%;

    background-color: ${themes.primary.colors.blogBackground};
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
  cursor: pointer;
  position: absolute;
  top: -0.675rem;
  left: -0.675rem;
  width: 1.35rem;
  height: 1.35rem;

  border: 1px solid ${themes.primary.colors.primary};
  border-radius: 50%;
  background-color: ${themes.primary.colors.blogBackground};
  background-image: url(${messageBubbleCloseIcon.src});
  background-position: center;
  background-repeat: no-repeat;
`;
