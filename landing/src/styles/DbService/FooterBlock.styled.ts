import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    margin-top: 88px;
    margin-bottom: -2em;
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

    & > a {
      padding: 17.1px 31.1px !important;
    }
  }
`;

export const Image = styled.img`
  position: relative;
  right: 0;
  width: 22em;
  height: auto;
  bottom: 2.2em;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 20em;
    right: 10em;
    bottom: 3em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    right: 0em;
  }

  @media ${themes.primary.media.maxMobile} {
    bottom: 2em;
    left: 2.81em;
    width: 309px;
    height: 340px;
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
    width: 100%;
    font-size: 0.6em;

    h2 {
      line-height: 132%;
    }
  }
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.5em;
  line-height: 160%;
  margin: 0.833em 0 1.667em;
  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
    margin: 1em 0 28px;
    max-width: 100%;
  }
`;
