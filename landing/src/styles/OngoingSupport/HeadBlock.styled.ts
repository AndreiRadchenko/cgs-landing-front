import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../Animations.styled";

export const Container = styled.section`
  position: relative;
`;

export const Content = styled.div`
  padding-top: 9.56em;

  @media ${themes.primary.media.onlyTabletLandScape} {
    max-width: 75%;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-top: 0.94em;

    & a {
      font-size: 1em;
      padding: 1.195em 2.18em;
    }
  }
`;

export const Title = styled.h1`
  font-weight: inherit;
  font-size: 4.125em;
  line-height: 120%;
  text-transform: uppercase;
  margin: 0;

  @media ${themes.primary.media.maxMobile} {
    font-size: 2.375em;
    width: 108.5%;
  }

  & > span:last-child {
    position: relative;

    &::after {
      content: "";
      display: inline-block;
      width: 2px;
      height: 1.45em;
      background-color: ${themes.primary.colors.primary};
      animation: ${cursorBlinking} 1s steps(1) infinite;
      position: absolute;
      top: 0;
      right: -0.2em;
    }
  }
`;

export const Description = styled.p`
  font-size: 1.375em;
  line-height: 160%;
  max-width: 30em;
  margin: 1.275em 0 2.32em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin: 1.625em 0 1.75em;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 2.3em;
  right: 2.07em;
  width: 36.43vw;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 28.3em;
    right: -4em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 25em;
    top: 17em;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    width: 22.125em;
    height: auto;
    top: -3em;
    left: -0.81em;
  }
`;
