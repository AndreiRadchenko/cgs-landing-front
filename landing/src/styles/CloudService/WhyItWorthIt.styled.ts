import styled, { css } from "styled-components";
import { IIcon, ISlide } from "../../types/Decoration.types";
import themes from "../../utils/themes";
import { float, slideRight } from "../Animations.styled";

export const Container = styled.section`
  margin: 0 1.44em 0 0;
  max-width: 100%;

  @media ${themes.primary.media.maxMobile} {
    margin: 3.44em 0 0;
  }
`;

export const BlockWrapper = styled.div`
  margin-top: 3.5em;
  padding-top: 0.75em;
  display: flex;
  justify-content: space-between;
  column-gap: 50px;

  @media ${themes.primary.media.minPCFullHD} {
    & > div:nth-child(1) > div > img {
      width: 1.9em;
    }

    & > div:nth-child(2) > div > img {
      width: 2.3em;
    }

    & > div:nth-child(3) > div > img {
      width: 2.3em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    margin-top: 3.5em;
    padding: 0;
  }
`;

export const Block = styled.div<ISlide>`
  max-width: 33.2em;
  position: relative;

  &:first-child {
    padding-left: 1em;
  }

  & > div {
    min-width: 21em;

    @media ${themes.primary.media.maxServiceWeb} {
      min-width: auto;
    }
  }
  & > img {
    top: 11.4em;
    left: 13.5em;

    @media (max-width: 1300px) {
      left: 10em;
    }

    @media ${themes.primary.media.maxTabletLandScape} {
      left: 5em;
    }

    @media ${themes.primary.media.maxTabletPortrait} {
      left: 2em;
      top: 14em;
    }
  }

  &:nth-child(2) {
    padding-left: 0.5em;

    & > img {
      top: 2.5em;
      left: 17em;

      @media (max-width: 1300px) {
        left: 13em;
      }

      @media ${themes.primary.media.maxTabletLandScape} {
        left: 7em;
        top: 7em;
      }

      @media ${themes.primary.media.maxTabletPortrait} {
        left: 5em;
        top: 5em;
      }
    }
    & > div:first-child {
      margin-top: 9.7em;
    }

    @media ${themes.primary.media.maxMobile} {
      padding-left: 0;
      & > div:first-child {
        margin-top: 0;
      }
    }
  }
  :not(:last-child) {
    & > div {
      max-width: 19.5em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    &:not(:last-child) {
      margin-bottom: 1.375em;
    }
    & > div img {
      width: 1.7em;
    }
    &:first-child {
      padding: 0;
      & img {
        width: 1.3em;
      }
    }
    opacity: 0;
    &.scrolled {
      animation: ${({ ind }) => css`
        ${slideRight} 1.5s ${ind * 120}ms forwards
      `};
    }
  }
`;

export const TitleWrapper = styled.div`
  position: relative;
`;

export const Title = styled.p`
  margin: 0;
  margin-left: 1.67em;
  font-size: 1.5em;
  line-height: 160%;
  letter-spacing: 0.05em;
  -webkit-text-stroke: 0.2px black;

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.25em;
  }
`;

export const BlockText = styled.div`
  font-size: 1.125em;
  line-height: 160%;
  margin: 1.28em 0 0 0;
  max-width: 21.95em;

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin-top: 0.375em;
  }

  & > p {
    margin: 0;
  }
`;

export const Svg = styled.img<IIcon>`
  position: absolute;
  bottom: -17%;
  left: -7%;
  animation: ${({ xOffset }) =>
    css`
      ${float(xOffset)} 3s infinite linear
    `};

  @media ${themes.primary.media.maxTabletLandScape} {
    animation: none;
  }

  @media ${themes.primary.media.minPCFullHD} {
    left: -3%;
    bottom: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    animation: none;
    left: 0;
    bottom: 0;
  }
`;

export const Image = styled.img`
  position: absolute;

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;
