import styled, { css } from "styled-components";
import { IIcon, ISlide } from "../../types/Decoration.types";
import themes from "../../utils/themes";
import { float, slideRight } from "../Animations.styled";

export const Container = styled.section`
  margin-top: 11.875em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 1.5em;
  }
`;

export const Title = styled.h2`
  font-weight: inherit;
  font-size: 2.5em;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;

  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.oneAndHalf};
    display: none;
  }
`;

export const TextWrapper = styled.div`
  margin: 4.67em 4.94em 0 0;
  padding: 0.75em 0 0 1.1875em;
  display: flex;
  justify-content: space-between;

  @media ${themes.primary.media.maxMobile} {
    margin: 1em 0 0;
    padding: 0;
    flex-direction: column;
    row-gap: 1.25em;
  }
`;

export const Subtitle = styled.p`
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
  margin: 0;
  padding-left: 1.8em;
  position: relative;
  -webkit-text-stroke: 0.2px black;
  @media ${themes.primary.media.maxMobile} {
    font-size: 1.25em;
  }
`;

export const Text = styled.p`
  font-size: 1.125em;
  line-height: 160%;
  margin: 1.28em 0 0 1.05em;
  max-width: 19.45em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    max-width: 95%;
    margin: 6px 0 0;
  }
`;

export const Svg = styled.img<IIcon>`
  position: absolute;
  top: -0.1em;
  left: -0.5em;
  max-width: 1.8em;

  animation: ${({ xOffset }) =>
    css`
      ${float(xOffset)} 3s infinite linear
    `};

  @media ${themes.primary.media.maxTabletLandScape} {
    animation: none;
  }

  @media ${themes.primary.media.maxMobile} {
    max-width: 1.5em;
    left: 0;
  }
`;

export const BackgroundContainer = styled.img`
  display: block;
  position: absolute;

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const Wrapper = styled.div<ISlide>`
  position: relative;
  &:first-child {
    margin-right: 6.1em;

    @media ${themes.primary.media.onlyTabletPortrait} {
      margin-right: 1em;
    }

    @media ${themes.primary.media.maxMobile} {
      margin: 0;
    }
    & img {
      top: -0.4em;

      @media ${themes.primary.media.maxMobile} {
        max-width: 1.2em;
        top: -0.3em;
      }
    }

    & > img {
      top: 14.85em;
      left: 13.03em;

      @media ${themes.primary.media.onlyTabletPortrait} {
        left: 3em;
      }

      @media ${themes.primary.media.onlyTabletLandScape} {
        left: 7em;
      }
    }
  }

  &:nth-child(2) {
    margin-top: 13.67em;
    margin-right: 4.8em;

    @media ${themes.primary.media.onlyTabletPortrait} {
      margin-right: 1em;
    }

    @media ${themes.primary.media.maxMobile} {
      margin: 0;
    }

    & > img {
      bottom: 15.1em;
      left: 17em;

      @media ${themes.primary.media.onlyTabletPortrait} {
        left: 6em;
      }

      @media ${themes.primary.media.onlyTabletLandScape} {
        left: 10em;
      }
    }
  }

  @media ${themes.primary.media.maxMobile} {
    opacity: 0;

    &.scrolled {
      animation: ${({ ind }) => css`
        ${slideRight} 1.5s ${ind * 200}ms forwards
      `};
    }
  }
`;
