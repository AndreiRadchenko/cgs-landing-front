import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  @media ${themes.primary.media.maxMobile} {
    &:before {
      content: "";
      display: block;
      height: 1px;
      width: 120vw;
      position: relative;
      right: 10%;
      background: ${themes.primary.colors.headerBorder};
      margin-bottom: 2.69em;
    }
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
    font-size: ${themes.primary.font.size.webAuditSubtitleMobile};
    margin-bottom: 1em;
    br {
      display: none;
    }
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 4.5em;
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0;
  }
`;
