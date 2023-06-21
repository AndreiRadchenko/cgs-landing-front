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
      bottom: -128px;
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
  font-size: 1.875em;
  line-height: 1.2;
  width: fit-content;
  margin-bottom: 0.5;

  @media ${themes.primary.media.maxMobile} {
    position: absolute;
    top: -28px;
    left: -48px;
    font-size: 20px;
    line-height: 24px;
    margin: 0;
  }
`;

export const TextContent = styled.div<ISlide>`
  font-size: 1.125em;
  line-height: 160%;
  padding-top: 1.11em;
  max-width: 40em;
  opacity: 0;

  &:nth-child(n + 3) {
    padding-top: 1.45em;
  }

  @media (min-width: 2200px) {
    &:nth-child(2) {
      padding-top: 0.5em;
    }
    &:nth-child(n + 3) {
      padding-top: 2.3em;
    }
  }

  @media (min-width: 2200px) {
    &:nth-child(2) {
      padding-top: 0.5em;
    }
    &:nth-child(n + 3) {
      padding-top: 2.3em;
    }
  }

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
    padding-top: 0.5em;
  }

  @media (max-width: 1150px) {
    padding-top: 0.5em;
  }

  @media (max-width: 1100px) {
    padding-top: 0.5em;
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
    font-size: 16px;
    line-height: 22.4px;
    padding-top: 14px;

    &:not(:first-child) {
      padding-top: 1.3em;
    }

    &:nth-child(2) {
      padding-top: 14px;
    }
  }
`;

export const ContentWrapper = styled.div`
  padding-left: 6.5em;
  padding-right: 6.25em;
  display: flex;
  column-gap: 20vw;
  z-index: 5;

  @media (min-width: 1550px) {
    & span:not(:first-child) br {
      display: none;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 0.8em;
    padding-top: 0px;
    padding-left: 9.25em;
    padding-right: 5.25em;
    font-size: 0.9em;
    column-gap: 15vw;
  }

  @media (min-width: 2200px) {
    font-size: 0.9em;
    padding-left: 9.25em;
    column-gap: 15vw;
    padding-top: 1.5em;
  }

  @media (max-width: 1920px) {
    column-gap: 14vw;
    padding-left: 8em;
  }

  @media (max-width: 1450px) {
    column-gap: 13em;
    justify-content: start;
    padding-right: 3em;
  }

  @media ${themes.primary.media.maxServiceMobile} {
    display: flex;
    justify-content: space-between;
    column-gap: 15em;
    & span:not(:first-child) br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxServiceWeb} {
    font-size: 0.9em;
    padding-right: 0em;
    column-gap: 12vw;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-inline: 0;
    column-gap: 15%;

    padding-left: 2em;
  }

  @media (max-width: 1100px) {
    font-size: 0.8em;
    padding-left: 0;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
    row-gap: 8em;
    padding: 0 0 0 2.75em;
  }

  @media ${themes.primary.media.maxMobile} {
    max-width: 100%;
    row-gap: 6em;
    padding: 0 0 0 3.75em;
    padding-bottom: 30px;
    position: relative;
  }
`;

export const BgImage = styled.img`
  position: absolute;
  top: -1.1em;
  left: -9.5vw;
  width: 115vw;
  z-index: -1;

  @media ${themes.primary.media.maxPCFullHD} {
    /* top: -1.1em; */
  }

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
    width: 525px;
    height: 1129px;
    left: -3.3em;
    top: -1em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: auto;
    height: auto;
    position: absolute;
    display: block;
    left: -1.3em;
    top: 1.2em;
  }
`;
