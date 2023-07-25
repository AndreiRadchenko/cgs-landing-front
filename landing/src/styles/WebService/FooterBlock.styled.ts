import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding-bottom: 9.35em;
  position: relative;

  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 8px 0 270px;
    flex-direction: column;

    ::before {
      content: "";
      height: 1px;
      position: absolute;
      background-color: ${themes.primary.colors.headerBorder};
      width: 130%;
      top: -18px;
      left: -10%;
    }

    a {
      font-size: 1em;
    }

    h2 {
      line-height: 132%;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 8px 0 197px;
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

export const TextContent = styled.div``;

export const Image = styled.img`
  position: absolute;
  right: 0.56em;
  bottom: -2.2em;

  @media ${themes.primary.media.maxServiceWeb} {
    width: 17em;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    width: 16.875em;
    left: 20%;
    bottom: -105px;
    margin: 1.64em auto 1em;
  }
  @media ${themes.primary.media.maxMobile} {
    bottom: -165px;
  }
`;

export const SubtitleWrapper = styled.div`
  margin-bottom: 1.28em;
  max-width: 70vw;

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
  margin-bottom: 1.667em;
  max-width: 38.5em;
  font-size: 1.5em;
  line-height: 160%;

  @media ${themes.primary.media.maxServiceWeb} {
    font-size: 18px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 28px;
  }
`;
