import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  padding-top: 9.5em;
  margin-bottom: 11.875em;

  @media ${themes.primary.media.maxTabletLandScape} {
    max-width: 60%;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-top: 0.625em;
    margin-bottom: 0;
    max-width: 100%;

    & > a {
      font-size: 1em !important;
      padding: 1.195em 3.205em !important;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 4.125em;
  line-height: 120%;
  font-weight: inherit;
  text-transform: uppercase;
  margin: 0;
  white-space: nowrap;

  br {
    display: none;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 2.5em;
    white-space: pre-wrap;
    line-height: 1.25;

    br {
      display: block;
    }
  }
`;

export const Description = styled.p`
  font-size: 1.375em;
  line-height: 160%;
  margin: 1.28em 0 2.365em;
  max-width: 27.27em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin: 0.75em 0 1.75em;
  }
`;

export const Image = styled.img`
  margin: 0.5em -2.84em 0 0;
  max-width: 40em;
  height: 40.31em;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 30em;
    height: 30em;
    margin-top: 10em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 25em;
    height: 25em;
    margin-top: 17em;
    margin-left: -5em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 21.44em;
    height: auto;
    margin: 0.19em 0 0 0.75em;
  }
`;
