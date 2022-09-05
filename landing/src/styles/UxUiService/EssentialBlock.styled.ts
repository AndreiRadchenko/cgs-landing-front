import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin: 12.24em 2.1em 0 1.56em;
  display: flex;
  position: relative;

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-inline: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 9.115em 0 0;
    flex-direction: column-reverse;
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
  }
`;

export const ContentWrapper = styled.div`
  padding-top: 1.125em;
  padding-left: 0.4em;
  margin: 0 0 0 auto;
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

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
  }
`;

export const Text = styled.p`
  font-size: 1.375em;
  line-height: 160%;
  margin: 1.82em 0 0;
  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin: 2.125em 0 1.75em;
  }
`;
