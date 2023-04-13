import styled from "styled-components";
import themes from "../../utils/themes";

interface IChatContainer {
  isChatOpen: boolean;
}

export const ChatContainer = styled.div<IChatContainer>`
  position: absolute;
  right: 6em;
  bottom: 0;
  width: 26vw;
  height: 37vw;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1.8px solid ${themes.primary.colors.primary};
  border-bottom: none;
  border-left: none;
  opacity: ${({ isChatOpen }) => (isChatOpen ? 1 : 0)};
  transform-origin: 100% 100%;
  transform: scale(${({ isChatOpen }) => (isChatOpen ? 1 : 0)});
  background-color: ${themes.primary.colors.chatContainerBgc};
  transition: all 0.3s;

  @media ${themes.primary.media.maxLaptop} {
    width: 369px;
    height: 533px;
  }

  @media ${themes.primary.media.maxMobile} {
    bottom: 55px;
    right: 0;
    width: 100vw;
    height: calc(100vh - 5.9rem - 60px);
    border-right: none;
    transform-origin: 50% 100%;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;

    border: 1.8px solid ${themes.primary.colors.primary};
    border-radius: 1.5px;
    background: ${themes.primary.colors.mainGradientColor2};
    transform: skew(-45deg);
    transform-origin: top;
  }

  &::before {
    top: 2px;
    left: -7px;
    width: 5px;
    height: 99.5%;
    transform: skewY(-45deg);
    background: linear-gradient(
      ${themes.primary.colors.mainGradientColor1},
      ${themes.primary.colors.mainGradientColor2}
    );

    @media (min-width: 1500px) {
      top: 2.3px;
      height: 99.8%;
    }
    @media ${themes.primary.media.maxMobile} {
      display: none;
    }
  }

  &::after {
    bottom: -6.5px;
    left: 0.5px;
    width: 99.7%;
    height: 5px;

    @media (min-width: 1500px) {
      left: 0;
      width: 100%;
    }
    @media ${themes.primary.media.maxMobile} {
      display: none;
    }
  }

  @supports (-webkit-hyphens: none) {
    &::before {
      top: 2.9px;
      height: 99.7%;
    }
    &::after {
      width: 100%;
      left: 0;
    }

    @media ${themes.primary.media.maxMobile} {
      height: calc(100vh - 5.9rem - 59px);
    }
    @media (max-width: 1024px) {
      &::before {
        top: 2.9px;
        height: 99.7%;
      }
      &::after {
        width: 100%;
        left: 0;
      }
    }
    @media (min-width: 1500px) {
      &::before {
        top: 2.9px;
        height: 99.7%;
      }
      &::after {
        width: 100%;
        left: -1px;
      }
    }
  }
`;

export const ChatHeader = styled.div`
  padding: 10px 18px;
  line-height: 150%;

  border-bottom: 1.8px solid ${themes.primary.colors.primary};
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.mainGradientColor1},
    ${themes.primary.colors.mainGradientColor2}
  );

  p {
    margin: 0;
  }
`;

export const ChatTitle = styled.p`
  font-weight: ${themes.primary.font.weight.bold};
  font-size: ${themes.primary.font.size.oneAndHalf};
`;

export const OperatorStatus = styled.p`
  font-weight: ${themes.primary.font.weight.semiBold};
  opacity: 0.5;
`;

export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  width: 100%;
  height: calc(100% - 40px);
  overflow: hidden;
  background-color: ${themes.primary.colors.chatContainerBgc};

  .ce-ice-breaker-wrapper {
    display: none;
  }
`;

export const ChatMessagesContainer = styled.div`
  height: 100%;
  flex-grow: 1;
  padding: 0 0 0 15px;
`;

export const ChatFormContainer = styled.div`
  height: 77px;
  width: 100%;
  padding: 0 15px;
  background: rgba(143, 142, 147, 0.07);
  display: flex;
  align-items: center;
  gap: 5px;
`;
