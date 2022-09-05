import styled from "styled-components";
import themes from "../../utils/themes";
import providesBgi from "../../../public/OngoingSupport/providesBgi.png";
import mobileBgi from "../../../public/OngoingSupport/mobile-background.png";

export const Container = styled.div`
  margin-top: 12.5em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 11.25em;
  }
`;

export const BackgroundWrapper = styled.div`
  background-image: url(${providesBgi.src});
  background-position: 100 100;
  background-size: contain;
  background-repeat: no-repeat;

  width: 115.9%;
  height: 47.5em;
  position: relative;
  left: -4.3em;
  top: 11.3em;

  @media ${themes.primary.media.maxMobile} {
    background-image: url(${mobileBgi.src});
    width: 28.81em;
    height: 67.6em;
    left: -3em;
    top: 8.875em;
  }
`;

export const Title = styled.h2`
  font-weight: inherit;
  font-size: 2.5em;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 233%;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25em;
  line-height: 160%;
  text-transform: uppercase;
  color: ${themes.primary.colors.mainGradientColor2};
  margin: 0;
`;

export const Text = styled.p`
  font-size: 1.125em;
  line-height: 160%;
  max-width: 18em;
  margin: 0;
  margin-top: 0.45em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    line-height: 132%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 9em;
  position: relative;
  top: -8em;
  left: -1em;
  width: 95%;
  margin: 0 auto;
  justify-content: space-around;

  @media (max-width: 1340px) {
    top: -10em;
    column-gap: 4em;
  }

  @media (max-width: 1000px) {
    left: 0.5em;
    width: 90%;
    column-gap: 0em;
  }

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    margin: 0 0 0 2.6em;
    padding: 3.8em 0 0 0;
  }

  & > div {
    margin: 0;
    margin-bottom: 6em;

    @media ${themes.primary.media.maxServiceWeb} {
      margin-bottom: 6em;
    }

    @media (max-width: 1340px) {
      margin-bottom: 4em;
      max-width: 17em;
    }

    @media (max-width: 1000px) {
      margin-bottom: 1em;
      max-width: 15em;
    }

    @media ${themes.primary.media.maxMobile} {
      max-width: 95%;
      margin-bottom: 6.69em;
    }

    &:nth-child(4) {
      margin-left: 5em;

      @media (max-width: 1340px) {
        max-width: 25em;
      }

      @media (max-width: 1000px) {
        margin: 0;
      }

      @media ${themes.primary.media.maxMobile} {
        margin: 0 0 5.75em 3.375em;
      }
    }

    &:nth-child(2) {
      margin-top: 7.17em;

      @media ${themes.primary.media.maxTabletLandScape} {
        margin-top: 5em;
      }

      @media ${themes.primary.media.maxMobile} {
        margin: 0 0 5.75em 3.375em;
      }
    }

    &:nth-child(3) {
      & > p {
        max-width: 19em;
      }
    }

    &:last-child {
      margin-right: 6em;

      @media (max-width: 1340px) {
        max-width: 25em;
      }

      @media (max-width: 1000px) {
        margin: 0;
      }
    }
  }
`;
