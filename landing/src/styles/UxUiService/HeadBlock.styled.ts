import styled from "styled-components";
import themes from "../../utils/themes";
import { cursorBlinking } from "../Animations.styled";

export const Container = styled.section`
  position: relative;
`;

export const ContentWrapper = styled.div`
  padding-top: 9.3em;
  max-width: 50%;

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 54%;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-top: 1em;
    max-width: 100%;

    & > a {
      font-size: 1em !important;
      padding: 1.195em 2.05em !important;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
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
      animation: ${cursorBlinking} 1s steps(1) infinite;
      position: relative;
      top: 0.4em;
      right: -0.2em;
    }
  }
`;

export const Description = styled.div`
  margin: 0.9em 0 1.83em;
  font-size: 1.375em;
  line-height: 160%;
  width: 41.5vw;

  @media ${themes.primary.media.maxServiceWeb} {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    font-size: 1em;
    margin-bottom: 28px;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 4.31em;
  right: 2.81em;
  width: 35vw;

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
    height: 365px;
    top: 2.3em;
    left: 0;
  }
`;
