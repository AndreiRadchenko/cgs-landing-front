import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../Animations.styled";

export const ContentContainer = styled.section`
  margin-top: 15.1em;
  h2 {
    line-height: 132%;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 6.8em;
  }
`;

export const ProfText = styled.div`
  position: relative;
  margin-top: 1.7em;
  margin-bottom: 2.17em;
  font-size: ${themes.primary.font.size.secondary};
  line-height: 160%;

  @media ${themes.primary.media.maxTabletLandScape} {
    & br {
      display: none;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 1.125rem;
    margin-block: 1rem 2.56rem;
  }
`;

export const ButtonWrapper = styled.div`
  padding-bottom: 21.1em;

  @media ${themes.primary.media.maxMobile} {
    padding-bottom: 28.5em;
    & > a {
      font-size: 1.54em;
      padding: 1.195em 2.93em;
    }
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;
export const Image = styled.img`
  position: absolute;
  right: -0.7%;
  bottom: 200%;
  width: 36.3%;
  height: 29.16em;
  transform: rotate(2.06deg);

  @media ${themes.primary.media.maxMobile} {
    width: 94%;
    height: 28em;
    transform: rotate(-11.06deg);
    right: -20%;
    bottom: 1rem;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 113.5%;
    height: 24.8em;
  }
`;

export const HighlightText = styled.span`
  transition: background-position 1.5s, color 1.5s;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.serviceHighlight} 50%,
    rgba(255, 255, 255, 0) 50%
  );

  background-size: 200% 100%;
  background-position: 100% 0;
`;

export const HighlightWrapper = styled.span`
  position: relative;

  &.onScreen {
    color: ${themes.primary.colors.secondary};

    & > span {
      background-position: 0 0;
      transform: translate(0, 0.3em);
    }
  }
`;

export const HighlightBg = styled.span`
  position: absolute;
  bottom: 0.1em;
  height: 1.4em;
  z-index: -1;
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 1px;
  height: 1.5em;
  background: ${themes.primary.colors.primary};
  animation: ${cursorBlinking} 1s steps(1) infinite;
  transition: transform 1.5s;
  transform: translate(-14em, 0.3em);
`;
