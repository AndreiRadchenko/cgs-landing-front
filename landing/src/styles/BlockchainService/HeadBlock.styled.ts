import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../Animations.styled";

export const Container = styled.div`
  margin-top: 9.5em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 3em;
  }
`;

export const Content = styled.div`
  & > a {
    @media ${themes.primary.media.maxMobile} {
      font-size: 1em;
      padding: 1.2em 1.51em;
    }
  }
`;

export const Title = styled.h1`
  font-size: 4.125em;
  line-height: 120%;
  display: inline-block;

  margin: 0;
  text-transform: uppercase;
  font-weight: inherit;

  @media ${themes.primary.media.maxMobile} {
    font-size: 2.5em;
    line-height: 100%;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    max-width: 10em;
  }
  & > span:last-child {
    position: relative;
    top: 14px;

    &::after {
      content: "";
      display: inline-block;
      width: 2px;
      height: 1.45em;
      background-color: ${themes.primary.colors.primary};
      animation: ${cursorBlinking} 0.8s infinite;
      position: absolute;
      top: 0;
      right: -0.2em;
    }
  }
`;

export const Description = styled.p`
  font-size: 1.375em;
  line-height: 160%;
  margin: 1.279em 0 2.365em;
  max-width: 600px;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    max-width: 95%;
    margin: 1.625em 0 1.75em;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    max-width: 60%;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: -2.875em;
  right: -1.56em;
  width: 42em;

  @media (max-width: 1300px) {
    width: 32em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    right: -7em;
    top: 2em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 28em;
    top: 7em;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    left: 1px;
    top: -0.75em;
    width: 22.3em;
    height: 19.125em;
  }
`;
