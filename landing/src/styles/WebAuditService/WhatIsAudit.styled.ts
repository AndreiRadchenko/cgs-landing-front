import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocks};
  
  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksTablet};
  }  
  
  @media ${themes.primary.media.maxMobile} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksMobile};
  }
`;

export const Subtitle = styled.h3`
  font-size: ${themes.primary.font.size.webAuditSubtitle};
  line-height: 140%;
  text-transform: uppercase;
  margin: 0 0 .775em 0;

  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.webAuditSubtitlePC};
  }

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
  max-width: 100%;
  white-space: nowrap;

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.tertiary};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.oneAndHalf};
    margin-bottom: 2.5em;
    margin-top: 1.25em;
    white-space: pre-line;
    br {
      display: none;
    }
  }
`;
