import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.div`
  font-size: 1rem;
  font-weight: ${themes.primary.font.weight};

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.2rem;
  }
  @media (min-width: 2200px) {
    font-size: 1.4rem;
  }
`;

export const Wrapper = styled.div`
  margin-top: ${themes.primary.spacing.servicesGlobalMarginBetweenBlocks};

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksTablet};
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksMobile};
  }
`;

export const WrapperWithLine = styled.div`
  @media ${themes.primary.media.maxMobile} {
    &:before {
      content: "";
      display: block;
      height: 1px;
      width: 120vw;
      position: relative;
      right: 10%;
      background: ${themes.primary.colors.headerBorder};
      margin-bottom: 1.75em;
    }
  }
`;

export const Subtitle = styled.h3`
  font-size: ${themes.primary.font.size.serviceSubtitle};
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;

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
    font-size: ${themes.primary.font.size.webAuditSubtitleMobile};
    margin-bottom: 1em;
    br {
      display: none;
    }
    &.mobileDissapear {
      display: none;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: ${themes.primary.font.size.oneAndHalf};
  }
`;

export const Text = styled.div`
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
  white-space: nowrap;

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.tertiary};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.oneAndHalf};
    white-space: pre-line;
    br {
      display: none;
    }
  }
`;
