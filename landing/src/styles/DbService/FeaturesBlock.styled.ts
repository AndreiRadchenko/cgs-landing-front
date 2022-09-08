import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 21.125em;
  position: relative;
  width: 100%;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 11.25em;
  }
`;

export const Subtitle = styled.h2`
  margin: 0;
  font-size: 2.125em;
  text-transform: uppercase;
  width: fit-content;

  @media (max-width: 1300px) {
    margin-bottom: 0.6em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-bottom: 0.3em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    margin: 0;
  }
`;

export const TextContent = styled.div`
  font-size: 1.125em;
  line-height: 160%;
  padding-top: 1.65em;

  & span {
    &:nth-child(1) {
      color: ${themes.primary.colors.mainGradientColor2};
    }
  }

  @media (max-width: 1300px) {
    padding-top: 0.5em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-top: 0;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.11em;
    padding-top: 2.375em;
    width: 17em;

    &:not(:first-child) {
      padding-top: 1.43em;
    }

    & span:not(:first-child) {
      font-size: 0.875em;
      & > br {
        display: none;
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  padding-left: 7.25em;
  padding-right: 6.2em;
  display: flex;
  column-gap: 18%;

  @media ${themes.primary.media.maxServiceMobile} {
    & span:not(:first-child) br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxServiceWeb} {
    font-size: 0.9em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-inline: 2em;
    column-gap: 10%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
    row-gap: 4.56em;
    padding: 0 0 0 2.75em;
  }

  @media ${themes.primary.media.maxMobile} {
    max-width: 25em;
    row-gap: 5em;
    padding-bottom: 8em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    max-width: 17em;
  }
  @media (min-width: 1450px) {
    column-gap: 20%;
    padding-top: 0.8em;
    & span:not(:first-child) br {
      display: none;
    }
  }
`;

export const BgImage = styled.img`
  position: absolute;
  left: -8.5em;
  width: 125%;

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
    width: 48em;
    left: -12em;
    top: 5em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 54em;
    left: -13.5em;
    top: 4.5em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 66em;
    left: -17em;
    top: 3.8em;
  }
`;
