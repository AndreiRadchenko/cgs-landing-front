import styled, { css } from "styled-components";
import { ISlide } from "../../types/Decoration.types";
import themes from "../../utils/themes";
import { slideRight } from "../Animations.styled";

export const Container = styled.section`
  margin-top: 4em;
  position: relative;
  margin-bottom: 10em;

  @media ${themes.primary.media.maxLowScreenMobile} {
    h2 {
      line-height: 132%;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    padding-bottom: 3.75em;
    margin-block: 1.875em 3em;

    ::after {
      content: "";
      height: 1px;
      position: absolute;
      background-color: ${themes.primary.colors.headerBorder};
      width: 130%;
      bottom: 0;
      left: -10%;
    }

    &.withoutShowcase {
      &::after {
        height: 0px;
      }
      margin-bottom: 0;
    }
  }
`;

export const BGImage = styled.img`
  position: absolute;
  width: 96.5625em;
  left: -8vw;
  top: 0.8em;

  @media ${themes.primary.media.minPCFullHD} {
    width: 90em;
  }

  @media (max-width: 1400px) {
    left: -9.5vw;
    width: 85.5625em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    display: none;
  }
`;

export const BGImageMobile = styled.img`
  display: none;
  @media ${themes.primary.media.maxTabletLandScape} {
    display: block;
    position: absolute;
    left: -3.2em;
    top: 3.5em;
    height: 41em;
  }

  @media ${themes.primary.media.maxMobile} {
    left: -1.2em;
    height: 44em;
    z-index: -1;
  }
`;

export const BlockWrapper = styled.div`
  padding: 4.027vw 0 0 11vw;
  position: relative;
  display: grid;
  row-gap: 50px;

  @media ${themes.primary.media.minPCFullHD} {
    padding-top: 3.15em;
  }

  @media (min-width: 2200px) {
    row-gap: 60px;
  }

  @media (max-width: 1400px) {
    padding-top: 3.8em;
    row-gap: 56px;
    font-size: 0.8em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 3.25em 0 0;
    max-width: fit-content;
    row-gap: 95px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 3.25em 0.8em 0;
    row-gap: 85px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 3.9em 0.8em 0;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    row-gap: 82px;
  }
`;

export const Block = styled.div<ISlide>`
  position: relative;
  opacity: 0;

  &.scrolled {
    animation: ${({ ind }) => css`
      ${slideRight} 1.5s ${ind * 200}ms forwards
    `};
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-bottom: 0;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    position: static;
  }

  & p {
    margin: 0;
  }

  &:nth-child(1) {
    left: 0;
  }

  &:nth-child(2) {
    left: 16.8vw;
  }

  &:nth-child(3) {
    left: 43vw;
    margin-bottom: 0;

    @media ${themes.primary.media.maxTabletLandScape} {
      left: 32em;
    }

    @media ${themes.primary.media.maxTabletPortrait} {
      left: 26em;
    }
  }
`;

export const Title = styled.p`
  font-size: 2em;
  margin: 0;

  br {
    display: none;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.6em;
    max-width: 14em;

    br {
      display: block;
    }
  }
`;

export const Description = styled.div`
  font-size: 1.125em !important;
  margin-top: 1.28em;
  line-height: 160%;
  max-width: 26.39em;

  @media (max-width: 1300px) {
    & p {
      display: inline;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    & p {
      display: inline;

      &::after {
        content: " ";
      }
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.25em !important;
    /* font-size: 2em !important; */
    max-width: 20em;
    margin-top: 0.81em;
  }
`;
