import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 18.31em;
  margin-left: 4.25em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin: 11.25em 0 0;
  }
`;

export const Subtitle = styled.h2`
  margin: 0;
  line-height: 140%;
  font-size: 2.5em;
  text-transform: uppercase;
  width: fit-content;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
  }
`;

export const TextContent = styled.div`
  font-size: 1.5em;
  line-height: 160%;
  margin-top: 1.67em;
  width: fit-content;

  @media ${themes.primary.media.maxTabletLandScape} {
    max-width: 20em;
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin: 2.375em 0 2.125em;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: -5.81em;
  right: 5.125em;
  width: 34.625em;
  height: 29.06em;

  @media (min-width: 1500px) {
    width: 35vw;
    right: 10em;
  }

  @media (max-width: 1300px) {
    right: 0;
    width: 30em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    right: -2em;
    width: 23em;
    top: -5em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    position: relative;
    width: 35em;
    top: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    width: 22.81em;
    height: auto;
    top: 0;
    left: -0.625em;
  }
`;
