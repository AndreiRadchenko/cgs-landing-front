import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  margin-top: 18.31em;
  margin-left: 4.25em;
  margin: 17.75em 0 6.625em 1.75em;
  position: relative;
  padding-bottom: 8em;

  &.withoutServices {
    margin-bottom: 8.125em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-bottom: 1.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-bottom: 0;
    margin: 130px 0 100px;
    &.withoutServices {
      margin-bottom: 5.625em;
    }
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
    line-height: 132%;
    margin-bottom: 14px;

    & .last-part > div {
      top: 20%;
    }
  }
`;

export const TextContent = styled.div`
  font-size: 1.375em;
  line-height: 160%;
  margin-top: 0.9em;
  max-width: 37.36vw;

  @media ${themes.primary.media.maxTabletLandScape} {
    max-width: 20em;
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    max-width: 100%;
    font-size: 1em;
    margin: 0 0 1.75em;
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
