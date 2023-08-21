import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.section`
  position: relative;
`;

export const ContentWrapper = styled.div`
  padding-top: 9.3em;
  max-width: 50%;

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 54%;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-top: 1em;
    max-width: 100%;

    & > a {
      font-size: 1em !important;
      padding: 1.195em 2.05em !important;
    }
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 4.31em;
  right: 2.81em;
  width: 35vw;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 30em;
    right: -5em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 25em;
    right: -5em;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    width: 22em;
    height: 365px;
    top: 2.3em;
    left: 0;
  }
`;
