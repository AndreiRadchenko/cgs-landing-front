import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 11.875em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 9.81em;
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
    margin-top: 2.375em;
  }

  & > div {
    position: relative;
    flex-basis: 30%;

    @media ${themes.primary.media.maxMobile} {
      & img {
        width: 1.8em;
      }

      &:first-child img {
        width: 1.3em;
      }
    }

    &:nth-child(2) {
      margin-top: 9.5em;

      @media ${themes.primary.media.maxMobile} {
        margin-top: 2.125em;
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
      margin-top: 2.125em;
    }
  }
`;

export const Subtitle = styled.h3`
  margin: 0.75em 0 0;
  padding-left: 2.25em;
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
  letter-spacing: 0.05em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.25em;
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

export const Svg = styled.img`
  position: absolute;
  top: -0.2em;
  left: -0.9em;
`;

export const Image = styled.img`
  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;
