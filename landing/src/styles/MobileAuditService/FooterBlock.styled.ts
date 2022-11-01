import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 12.5em;
  position: relative;
  padding-bottom: 19.25em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 6.25em;
    padding-bottom: 6em;
  }
`;

export const Content = styled.div`
  & > a {
    @media ${themes.primary.media.maxMobile} {
      font-size: 1em;
      padding: 1.2em 1.51em;
    }
  }
`;

export const ContentWrapper = styled.div`
  max-width: 61%;

  @media ${themes.primary.media.maxMobile} {
    max-width: 100%;

    & a {
      font-size: 1em;
      padding: 1.194em 2.91em;
    }
  }
`;

export const Title = styled.h2`
  font-size: 2.5em;
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;
  max-width: 28.75em;
  margin: 0 0 1.3em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.45em;
    line-height: 132%;
    margin-bottom: 1.5em;
    width: 14.5em;
  }
`;

export const Description = styled.p`
  font-size: 1.375em;
  line-height: 160%;
  margin: 1.279em 0 2.365em;
  max-width: 600px;

  @media ${themes.primary.media.minPC} {
    max-width: 40%;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    max-width: 60%;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    max-width: 95%;
    margin: 1em 0 1.75em;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: -2.875em;
  right: -1.56em;
  width: 30em;

  @media (max-width: 1300px) {
    width: 32em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    right: -7em;
    top: 2em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 28em;
    top: 7em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-left: 4em;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    left: 1px;
    top: -0.75em;
    width: 22.3em;
    height: 19.125em;
  }
`;

