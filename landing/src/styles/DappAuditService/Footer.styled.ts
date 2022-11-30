import styled from "styled-components";
import themes from "../../utils/themes";

export const ContentWrapper = styled.section`
  position: relative;
  padding-bottom: 15.6875em;

  @media ${themes.primary.media.maxMobile} {
    padding: 0;
    & > div a {
      padding: 1.3em 2.4em;
    }
  }
`;

export const TitleWrapper = styled.div`
  max-width: 80%;
  margin-bottom: 3.1875em;
  & br {
    display: none;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    max-width: none;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 2.125em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    & br {
      display: block;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 12%;
  right: 4.5625em;
  width: 457px;
  height: 323px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 657px;
    height: 523px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    right: 2em;
    width: 307px;
    height: 217px;
    top: auto;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    margin-left: auto;
    margin-right: 0;
    right: 0;
    margin-block: ${themes.primary.spacing.tertiary};
  }
`;
