import styled, { css } from "styled-components";
import { ISlide } from "../../types/Decoration.types";
import themes from "../../utils/themes";
import { slideDownText } from "../Animations.styled";

export const Container = styled.section`
  position: relative;
  width: 100%;
  margin-top: 1.875em;

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    margin-top: 50px;
    ::after {
      content: "";
      height: 1px;
      position: absolute;
      background-color: ${themes.primary.colors.headerBorder};
      width: 130%;
      bottom: -135px;
      left: -10%;
    }
  }
`;

export const Title = styled.h2`
  margin: 4.325em 0 0;
  line-height: 140%;
  font-size: 2.5em;
  text-transform: uppercase;
  width: fit-content;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 132%;
    margin-top: 88px;

    & .last-part > div {
      top: 20%;
    }
  }
`;

export const Subtitle = styled.h2`
  margin: 0;
  font-size: 2.125em;
  width: fit-content;
  margin-bottom: 0.5;

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-bottom: 0.3em;
  }

  @media (max-width: 1300px) {
    margin-bottom: 0.6em;
  }

  @media ${themes.primary.media.maxMobile} {
    position: absolute;
    top: -28px;
    left: -48px;
    font-size: 1.67em;
    margin: 0;
  }
`;

export const TextContent = styled.div<ISlide>`
  font-size: 1.125em;
  line-height: 160%;
  padding-top: 2vw;
  max-width: 30em;
  opacity: 0;

  &.scrolled {
    transform-origin: top center;
    animation: ${({ ind }) =>
      css`
        ${slideDownText} 700ms ${ind * 100}ms ease-in forwards
      `};
  }

  & span {
    &:nth-child(1) {
      color: ${themes.primary.colors.darkBlue};
    }
  }

  @media (max-width: 1300px) {
    padding-top: 0.5em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-top: 1.4em;
  }

  @media (max-width: 1150px) {
    padding-top: 1.2em;
  }

  @media (max-width: 1100px) {
    padding-top: 0.9em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.3em;
    width: 17em;

    &:not(:first-child) {
      padding-top: 2.1em;
    }

    &:nth-child(2) {
      padding-top: 1em;
    }

    & span:not(:first-child) {
      font-size: 0.875em;
      & > br {
        display: none;
      }
    }
  }
  @media ${themes.primary.media.maxMobile} {
    &:not(:first-child) {
      padding-top: 1.8em;
    }
    /* &:nth-child(1) {
      padding-top: 28px;
    } */

    &:nth-child(2) {
      padding-top: 1em;
    }
  }
`;

export const ContentWrapper = styled.div`
  padding-left: 7.25em;
  padding-right: 6em;
  display: flex;
  justify-content: space-between;
  column-gap: 10em;
  z-index: 5;

  @media ${themes.primary.media.maxServiceMobile} {
    & span:not(:first-child) br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxServiceWeb} {
    font-size: 0.9em;
    padding-right: 4em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-inline: 0;
    column-gap: 15%;

    padding-left: 2em;
  }

  @media (max-width: 1100px) {
    font-size: 0.8em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
    row-gap: 8em;
    padding: 0 0 0 2.75em;
  }

  @media ${themes.primary.media.maxMobile} {
    max-width: 100%;
    row-gap: 10.5em;
    padding: 0 0 0 3.75em;
    padding-bottom: 30px;
    position: relative;
  }

  @media (min-width: 1550px) {
    padding-top: 0.8em;
    & span:not(:first-child) br {
      display: none;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 0.8em;
    justify-content: space-around;
  }

  @media (min-width: 2200px) {
    font-size: 0.9em;
  }
`;

export const BgImage = styled.img`
  position: absolute;
  left: -11vw;
  width: 115vw;
  z-index: -1;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 140%;
    left: -12em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    display: none;
  }
`;

export const BgImageMobile = styled.img`
  display: none;

  @media ${themes.primary.media.maxTabletPortrait} {
    position: absolute;
    display: block;
    width: 60em;
    left: -3.2em;
    top: 5em;
    top: 6em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 56em;
    left: -1.5em;
    top: 1.5em;
  }
`;
