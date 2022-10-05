import styled, { css } from "styled-components";
import { IIcon } from "../../types/Decoration.types";
import themes from "../../utils/themes";
import { float } from "../Animations.styled";

export const Container = styled.div`
  margin-top: 11.875em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 4.8em;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: ${themes.primary.font.size.reviewTitle};
  line-height: 140%;
  text-transform: uppercase;
  font-weight: inherit;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 233%;
  }
`;

export const SubBlockContainer = styled.div`
  margin-top: 3.125em;
  padding-left: 1.19em;
  display: flex;
  justify-content: space-between;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    margin-top: 0;
    padding-left: 0;
    max-width: 99.4%;
  }

  & > div {
    position: relative;
    flex-basis: 30%;

    @media ${themes.primary.media.maxMobile} {
      & img {
        width: 1.6em;
      }

      &:first-child img {
        width: 1.2em;
      }
    }

    &:nth-child(2) {
      margin-top: 9.5em;

      @media ${themes.primary.media.maxMobile} {
        margin-top: 1.19em;
      }

      & > img {
        position: absolute;
        left: 15.94em;
        top: -5.875em;

        @media ${themes.primary.media.maxTabletLandScape} {
          left: 9em;
          top: -3em;
        }
        @media ${themes.primary.media.maxTabletPortrait} {
          left: 5em;
        }
      }
    }

    &:first-child > img {
      position: absolute;
      left: 13em;
      top: 11.875em;

      @media ${themes.primary.media.maxTabletLandScape} {
        left: 5em;
        top: 14em;
      }

      @media ${themes.primary.media.maxTabletPortrait} {
        top: 19em;
        left: 2em;
      }
    }

    @media ${themes.primary.media.maxMobile} {
      margin-top: 1.19em;

      &:first-child {
        margin-top: 1em;
      }
    }
  }
`;

export const Subtitle = styled.h3`
  margin: 0.75em 0 0;
  padding-left: 2.25em;
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
  letter-spacing: 0.05em;
  -webkit-text-stroke: 0.2px black;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.25em;
    margin: 0;
  }
`;

export const Text = styled.p`
  font-size: 1.125em;
  line-height: 160%;
  margin: 1.28em 0 0;

  @media ${themes.primary.media.maxServiceWeb} {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin: 6px 0 0;
  }
`;

export const Svg = styled.img<IIcon>`
  position: absolute;
  top: -0.2em;
  left: -0.9em;
  animation: ${({ xOffset }) =>
    css`
      ${float(xOffset)} 3s infinite linear
    `};

  @media ${themes.primary.media.maxMobile} {
    left: 0;
  }
`;

export const Image = styled.img`
  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;
