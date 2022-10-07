import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Subtitle = styled.h2`
  margin: 0;
  font-size: 2.125em;
  text-transform: uppercase;
  width: fit-content;
  margin-bottom: 0.5;

  @media (max-width: 1300px) {
    margin-bottom: 0.6em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-bottom: 0.3em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.67em;
    margin: 0;
  }
`;

export const TextContent = styled.div`
  font-size: 1.125em;
  line-height: 160%;
  padding-top: 2vw;
  max-width: 30em;

  & span {
    &:nth-child(1) {
      color: ${themes.primary.colors.mainGradientColor2};
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
    font-size: 1.11em;
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

    &:nth-child(2) {
      padding-top: 1em;
    }
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    &:not(:first-child) {
      padding-top: 1.25em;
    }

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
    max-width: 25em;
    row-gap: 8.3em;
    padding-bottom: 8em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    max-width: 17em;
    row-gap: 7.2em;
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
    width: 68em;
    left: -17em;
    top: 3.6em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 65em;
    left: -16em;
    top: 2.8em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 61em;
    left: -15em;
  }
`;
