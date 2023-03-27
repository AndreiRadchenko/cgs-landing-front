import styled from "styled-components";
import themes from "../../utils/themes";

interface IChatContainer {
  isChatOpen: boolean;
}

export const ChatContainer = styled.div<IChatContainer>`
  position: fixed;
  right: 6em;
  top: calc(11.3% - 5px);
  width: 369px;
  height: 533px;

  border: 1.8px solid ${themes.primary.colors.primary};
  border-bottom: none;
  border-left: none;
  opacity: ${({ isChatOpen }) => (isChatOpen ? 1 : 0)};
  background-color: ${themes.primary.colors.chatContainerBgc};
  transition: all 0.3s;

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
    height: 100%;
    transform: skewY(-45deg);
    background: linear-gradient(
      ${themes.primary.colors.mainGradientColor1},
      ${themes.primary.colors.mainGradientColor2}
    );
  }

  &::after {
    bottom: -6.5px;
    left: 0;
    width: 100%;
    height: 5px;
  }
`;
