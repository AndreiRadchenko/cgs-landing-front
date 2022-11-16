import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocks};
  position: relative;
  z-index: 16;
  overflow-block: visible;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksTablet};
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 2em;
    margin-bottom: 8.65em;
  }
`;

export const Subtitle = styled.h3`
  font-size: ${themes.primary.font.size.webAuditSubtitle};
  line-height: 140%;
  text-transform: uppercase;
  margin: 0 0 0.775em 0;

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

export const TypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 94px;
  margin-top: 4.5em;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 2.7em;
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
`;
