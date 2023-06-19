import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  margin-top: 3%;

  @media (min-width: 1560px) {
    margin-top: 3.5%;
  }

  @media (min-width: 1920px) {
    margin-top: 1%;
  }

  @media (min-width: 2560px) {
    margin-top: 0%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksTablet};
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksMobile};
  }
`;

export const Subtitle = styled.h3`
  font-size: 2.5rem;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0 0 0.775em 0;

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.webAuditSubtitleTabletLandscape};
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: ${themes.primary.font.size.webAuditSubtitleTabletPortrait};
  }

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;

  @media ${themes.primary.media.maxMobile} {
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column-reverse;
  }
`;

export const Image = styled.img`
  width: 43.58em;
  position: relative;

  @media ${themes.primary.media.minPCFullHD} {
    width: 47em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 35em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 50%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  font-size: 2em;
  margin: 0 auto;
  line-height: 160%;
  max-width: 26.1em;

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.tertiary};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.oneAndHalf};
    margin-bottom: 10px;
    white-space: pre-line;
    max-width: 100%;
    br {
      display: none;
    }
  }
`;
