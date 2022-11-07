import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocks};
  position: relative;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksTablet};
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksTablet};

    &:before {
      content: "";
      display: block;
      height: 1px;
      width: 120vw;
      position: relative;
      right: 10%;
      background: #8f8e93;
      margin-bottom: 2.69em;
    }
  }
`;

export const Subtitle = styled.h3`
  font-size: ${themes.primary.font.size.webAuditSubtitle};
  line-height: 140%;
  text-transform: uppercase;
  margin: 0 0 0.775em 0;
  padding-bottom: 20vw;

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
    margin: 0 0 1em 0;
    padding-bottom: 0;
    br {
      display: none;
    }
  }
`;

export const Image = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 28vw;

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    top: 0;
    right: 20px;
    width: 100vw;
    height: 100vw;
  }
`;
