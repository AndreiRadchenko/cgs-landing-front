import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  margin-top: 9.5em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 1.4em;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const Title = styled.h1`
  font-size: 4.125em;
  line-height: 120%;
  display: inline-block;

  margin: 0;
  text-transform: uppercase;
  font-weight: inherit;

  span:first-child {
    br {
      display: none;
    }
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    max-width: 10em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 2.5em;
    line-height: 100%;

    & .last-part {
      top: 14px;
    }

    span:first-child {
      br {
        display: block;
      }
    }
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
    margin: 2.5em 0 1.75em;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: -2.875em;
  right: -1.56em;
  width: 42em;

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

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    left: 1px;
    top: -0.75em;
    width: 22.3em;
    height: 19.125em;
  }
`;
