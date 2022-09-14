import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 12.5em;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 11.25em;
    margin-bottom: 3.125em;
    flex-direction: column;
  }
`;

export const TextContent = styled.div`
  & > a {
    font-size: 1.125em;
    margin-top: 2.9em;

    @media ${themes.primary.media.maxMobile} {
      font-size: 1em;
      margin-top: 2.19em;
      padding: 1.195em 1.31em;
    }
  }
`;

export const Image = styled.img`
  position: relative;
  right: 3.875em;
  width: 26.4em;
  height: 29em;
  bottom: 4.625em;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 20em;
    right: 15em;
    bottom: 3em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    right: 6em;
  }

  @media ${themes.primary.media.maxMobile} {
    top: 0.94em;
    left: 2.81em;

    width: 19.31em;
    height: 21.3em;
  }
`;

export const SubtitleWrapper = styled.div`
  line-height: 140%;
  width: 50em;
  h2 {
    font-size: 2.5em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 30em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 28em;
    font-size: 0.6em;

    h2 {
      line-height: 132%;
    }
  }
`;
