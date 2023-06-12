import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    margin-top: 88px;
    margin-bottom: 3.125em;
    flex-direction: column;
    ::before {
      position: absolute;
      top: -28px;
      left: -30px;
      content: "";
      width: 150%;
      height: 1px;
      background-color: #8f8e93;
    }
  }
`;

export const TextContent = styled.div`
  & > a {
    margin-top: 2.9em;

    @media ${themes.primary.media.maxMobile} {
      font-size: 1em !important;
      margin-top: 2.19em;
      padding: 1.195em 1.31em !important;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
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
  margin: 0 0 1.25em;
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

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.375em;
  line-height: 160%;
  margin: 0.5em 0 2em;
  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin: 1em 0 1.75em;
    max-width: 94%;
  }
`;
