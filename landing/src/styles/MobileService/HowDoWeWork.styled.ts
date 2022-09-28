import styled, { css } from "styled-components";
import themes from "../../utils/themes";

export const ContentWrapper = styled.div`
  margin-top: 17em;

  @media ${themes.primary.media.maxServiceMobile} {
    margin-top: 10em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 7.7em;
  }
`;

export const LineContainer = styled.div`
  position: relative;
`;

export const Line = styled.div`
  position: absolute;
  width: 120%;
  top: 51%;
  left: 50%;
  height: 24px;
  transform: translate(-50%, -50%);
  box-shadow: 7px 2px 0px ${themes.primary.colors.primary};
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.mainGradientColor1} 13.67%,
    ${themes.primary.colors.mainGradientColor2} 90.39%
  );
  border: 1px solid ${themes.primary.colors.primary};

  @media ${themes.primary.media.maxTabletLandScape} {
    display: none;
  }
`;

interface IMobileLine {
  firstColor: string;
  secondColor: string;
}

export const MobileLine = styled.div<IMobileLine>`
  display: none;

  @media ${themes.primary.media.maxTabletLandScape} {
    display: block;
    position: relative;
    top: -5px;
    left: -10%;
    width: 120%;
    height: 24px;
    box-shadow: 7px 2px 0px ${themes.primary.colors.primary};
    background: linear-gradient(
      ${({ firstColor, secondColor }) =>
        css` 90deg,
      ${firstColor} 13.67%,
      ${secondColor} 90.39%`}
    );
    border: 1px solid ${themes.primary.colors.primary};
  }

  @media ${themes.primary.media.maxMobile} {
    top: -20px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  margin-bottom: 2em;
  z-index: 5;

  &:nth-child(4) {
    margin-left: 23.8em;
  }

  &:nth-child(4),
  &:nth-child(5) {
    transform: translateY(1.8em);
    & img {
      transform: translateY(-2em);
    }

    @media ${themes.primary.media.minPC} {
      &:nth-child(4) {
        margin-left: 15em;
      }
      transform: translateY(1em);
      & img {
        transform: translateY(-1em);
      }
    }

    @media ${themes.primary.media.minPCFullHD} {
      transform: translateY(0.8em);
      & img {
        transform: scale(1.15) translateY(-0.5em);
      }
    }

    @media (min-width: 2200px) {
      transform: translateY(-0.2em);
      & img {
        transform: scale(1.5) translateY(0.2em);
      }
    }

    @media ${themes.primary.media.maxServiceMobile} {
      transform: translateY(2.8em);
      & img {
        transform: scale(0.95) translateY(-3.3em);
      }
    }
    @media (max-width: 1310px) {
      &:nth-child(4) {
        margin-left: 15em;
      }
    }
    @media ${themes.primary.media.maxTabletLandScape} {
      transform: none;
      margin: 0;
      width: 100%;

      &:nth-child(4) {
        margin-left: 0;
      }
      & img {
        transform: none;
      }
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-bottom: 0em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 30em;
    white-space: pre-wrap;
    br {
      display: none;
    }
  }
`;

export const Point = styled.img`
  margin-left: 1em;
  transform: translateY(2.5em);
  z-index: 5;
  margin-right: 1.5em;

  @media ${themes.primary.media.minPC} {
    transform: translateY(2.5em);
  }
  @media ${themes.primary.media.minPCFullHD} {
    transform: scale(1.15) translateY(2.2em);
  }

  @media (min-width: 2200px) {
    transform: scale(1.5) translateY(1.6em);
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    height: 90px;
    width: auto;
    margin-right: 5px;
    transform: translateY(0.6em) !important;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-left: 0;
  }
`;

export const TextTitle = styled.h3`
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.secondary};
  margin-bottom: 0.5em;
  z-index: 5;

  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.oneAndNine};
  }

  @media ${themes.primary.media.maxServiceMobile} {
    font-size: 1.6em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-block: 0;
    font-size: 1.125rem;
    line-height: 160%;
  }
`;

export const TextContent = styled.p`
  margin-top: 0.5em;
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
  margin-bottom: 0;
  z-index: 5;

  @media ${themes.primary.media.maxServiceMobile} {
    font-size: 1.3em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: 0;
    font-size: 0.875rem;
  }
`;

export const PointsWrapper = styled.div`
  margin-top: 4em;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  column-gap: 14em;
  width: 105%;

  @media ${themes.primary.media.minPC} {
    justify-content: center;

    column-gap: 14.33em;
  }
  @media ${themes.primary.media.minPCFullHD} {
    column-gap: 2em;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    flex-direction: column;
    column-gap: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 1.5em;
    row-gap: 1.3em;
  }
`;
