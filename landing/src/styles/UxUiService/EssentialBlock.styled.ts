import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  margin: 0 2.1em 0 1.56em;
  display: flex;
  position: relative;

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-inline: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 0;
    flex-direction: column-reverse;
    position: relative;
    ::after {
      content: "";
      height: 1px;
      position: absolute;
      background-color: ${themes.primary.colors.headerBorder};
      width: 130%;
      bottom: -10%;
      left: -10%;
    }
  }
`;

export const Image = styled.img`
  position: absolute;
  width: 27.5em;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 25em;
    left: -2em;
    top: 2em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 20em;
    top: 12em;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    width: 20.44em;
    top: 0;
    left: 0;
  }
`;

export const ContentWrapper = styled.div`
  padding-top: 1.125em;
  padding-right: 0.8em;
  margin-left: auto;
  max-width: 55%;

  @media ${themes.primary.media.maxMobile} {
    padding: 0;
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: ${themes.primary.font.size.reviewTitle};
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;
  max-width: 100%;

  br {
    display: none;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    white-space: nowrap;

    br {
      display: block;
    }
  }
`;

export const Text = styled.p`
  font-size: 1.375em;
  line-height: 160%;
  margin: 1.82em 0 0;

  br {
    display: none;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin: 1em 0 1.75em;
    max-width: 94%;
  }
`;
