import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../Animations.styled";

export const Container = styled.div`
  position: relative;
`;

export const ContentWrapper = styled.div`
  padding-top: 9.56em;
  max-width: 50%;

  @media ${themes.primary.media.maxMobile} {
    padding-top: 2.4em;
    max-width: 100%;

    & a {
      font-size: 1em;
      padding: 1.195em 2.05em;
    }
  }
`;

export const Title = styled.h1`
  font-size: 4.125em;
  font-weight: inherit;
  line-height: 120%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0;

  br {
    display: none;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 2.5em;
  }

  & > span:last-child {
    position: relative;

    &::after {
      content: "";
      display: inline-block;
      width: 2px;
      height: 1.45em;
      background-color: ${themes.primary.colors.primary};
      animation: ${cursorBlinking} 0.8s infinite;
      position: relative;
      top: 0.4em;
      right: -0.2em;
    }
  }
`;

export const Description = styled.p`
  margin: 1.55em 0 1.86em;
  font-size: 1.375em;
  line-height: 160%;

  @media ${themes.primary.media.maxServiceWeb} {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 5.31em;
  right: -0.81em;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 30em;
    right: -5em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 25em;
    right: -5em;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    width: 22em;
    top: 2.3em;
    left: 0;
  }
`;
