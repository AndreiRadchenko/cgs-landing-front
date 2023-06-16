import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15.75em;

  @media ${themes.primary.media.maxMobile} {
    padding: 8px 0 197px;
    flex-direction: column;
    position: relative;

    ::before {
      content: "";
      height: 1px;
      position: absolute;
      background-color: ${themes.primary.colors.headerBorder};
      width: 130%;
      top: -28px;
      left: -10%;
    }

    a {
      font-size: 1em;
    }

    h2 {
      line-height: 132%;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }
`;

export const TextContent = styled.div``;

export const Image = styled.img`
  position: absolute;
  right: 0.56em;
  bottom: 1.875em;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 20.875em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 16.875em;
    left: 2.44em;
    bottom: -160px;
    bottom: -155px;
    margin: 1.64em auto 1em;
  }
`;

export const SubtitleWrapper = styled.div`
  margin-bottom: 2.5em;
  max-width: 85%;

  @media ${themes.primary.media.maxServiceWeb} {
    font-size: 0.85em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 10px;
    font-size: 24px;
    max-width: 100%;
  }
`;

export const TextWrapper = styled.div`
  margin-bottom: 2.5em;
  max-width: 38.5em;
  font-size: 1.5em;
  line-height: 160%;

  @media ${themes.primary.media.maxServiceWeb} {
    font-size: 18px;
  }
`;
