import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  margin-top: 8.75em;
  position: relative;
  padding-bottom: 9.375em;

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-bottom: 1.25em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 5.5em;
    padding-bottom: 0;
    ::before {
      content: "";
      position: absolute;
      top: -28px;
      left: -30px;
      width: 150%;
      height: 1px;
      background-color: #8f8e93;
      color: black;
    }
  }
`;

export const ContentWrapper = styled.div`
  max-width: 66%;

  @media ${themes.primary.media.maxMobile} {
    max-width: 100%;

    & > a {
      font-size: 1em !important;
      padding: 1.194em 2.91em !important;
    }
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  right: 2.56em;

  @media ${themes.primary.media.maxTabletPortrait} {
    position: relative;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    transform: translateY(0);
    top: 0.31em;
    left: 1.44em;
    width: 22.88em;
  }
`;
