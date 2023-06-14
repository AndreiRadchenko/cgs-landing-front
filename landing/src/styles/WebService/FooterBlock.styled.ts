import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  padding-top: 1em;
  display: flex;
  justify-content: space-between;
  padding-bottom: 15.75em;

  @media ${themes.primary.media.maxMobile} {
    padding: 6.25em 0 0;
    flex-direction: column;
    position: relative;

    a {
      font-size: 1em;
    }

    h2 {
      line-height: 132%;
      width: 13em;
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
    position: relative;
    width: 16.875em;
    left: 2.44em;
    top: 0;
    margin: 1.64em auto 1em;
  }
`;

export const SubtitleWrapper = styled.div`
  margin-bottom: 2.5em;
  max-width: 65%;

  @media ${themes.primary.media.maxServiceWeb} {
    font-size: 0.85em;
  }
`;

export const TextWrapper = styled.div`
  margin-bottom: 2.5em;
  max-width: 38.5em;
  font-size: 1.5em;

  @media ${themes.primary.media.maxServiceWeb} {
    font-size: 0.85em;
  }
`;
