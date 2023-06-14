import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  margin-top: 201px;
  position: relative;
  display: flex;
  gap: 32px;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksTablet};
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksTablet};
    flex-direction: column;

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
  margin: 0 0 0.5em 0;

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
    padding-bottom: 0;
    br {
      display: none;
    }
  }
`;

export const Text = styled.p`
  font-size: 1.5em;
  line-height: 160%;
  font-weight: ${themes.primary.font.weight.heavy};

  @media ${themes.primary.media.maxMobile} {
    br {
      display: none;
    }
  }
`;

export const TextContainer = styled.div`
  max-width: 41em;
`;

export const ProblemsContainer = styled.div`
  width: 100%;
  padding: 5.8em 4.2em;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.gradientColor1RateCard} 0%,
    ${themes.primary.colors.gradientColor2RateCard} 100%
  );
  display: flex;
  flex-wrap: wrap;
  gap: 2.3em;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    padding: 22px 20px;
    margin-inline: -20px;
    width: 113%;
  }
`;

export const ProblemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  span {
    font-size: 1.5em;
    font-weight: ${themes.primary.font.weight.heavy};
  }
`;
