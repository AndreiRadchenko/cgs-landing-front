import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.section`
  margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocks};
  margin-bottom: 5.2em;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocksTablet};
    margin-bottom: ${themes.primary.spacing.servicesMarginBetweenFooterTablet};
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 60px;
    margin-bottom: ${themes.primary.spacing.servicesMarginBetweenFooterMobile};
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

export const ButtonWrapper = styled.div`
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    gap: 3em;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.16em;

  @media ${themes.primary.media.maxMobile} {
    gap: 0;

    & > a {
      padding: 1.29em 2.61em !important;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 250px;
  flex-shrink: 0;

  @media ${themes.primary.media.minPCFullHD} {
    width: 750px;
    height: 375px;
    margin: 0 auto;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 400px;
    height: 200px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100vw;
    height: 50vw;
    left: -30px;
  }
`;

export const HoveredImageContainer = styled.div`
  position: absolute;
  top: 54%;
  left: 28%;
  width: 44%;
  height: 20%;
  transform: rotate(6.5deg);
  overflow: hidden;
  z-index: 4;
`;

interface IProps {
  delay: number;
}

export const HoveredImage = styled.div<IProps>`
  @keyframes scroll {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-120%);
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }

  transform: translateX(-20%);
  opacity: ${({ delay }) => (delay ? "0" : "100")};

  animation: ${({ delay }) => {
    return delay
      ? "scroll 6s infinite linear, fade-in 1s ease-out forwards;"
      : "scroll 6s infinite linear;";
  }};
  animation-delay: ${({ delay }) => (delay ? `${delay * 3}s` : "0")};
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;

  width: 150%;
  height: 100%;
  z-index: 3;
`;

export const Subtitle = styled.h3`
  font-size: ${themes.primary.font.size.webAuditSubtitle};
  line-height: 140%;
  text-transform: uppercase;
  margin: 0 0 0.325em 0;

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
    margin: 0;
    padding-bottom: 0;
    max-width: 100%;
    br {
      display: none;
    }
  }
`;

export const TextWrapper = styled.div`
  font-size: 2em;
  line-height: 160%;
  max-width: 36em;

  & br {
    display: none;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.tertiary};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.73em;
    margin-bottom: 1.89em;
    margin-top: 0.55em;
    white-space: pre-line;
    max-width: 100%;
    br {
      display: none;
    }
  }
`;
