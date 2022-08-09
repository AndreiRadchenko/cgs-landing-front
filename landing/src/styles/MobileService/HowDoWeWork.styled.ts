import styled from "styled-components";
import themes from "../../utils/themes";

export const ContentWrapper = styled.div`
  margin-top: 17em;

  @media ${themes.primary.media.maxServiceMobile} {
    margin-top: 10em;
  }
`;

export const LineContainer = styled.div`
  position: relative;
`;

export const Line = styled.div`
  position: absolute;
  width: 120%;
  top: 50%;
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
`;

export const TextContainer = styled.div`
  display: flex;
  margin-bottom: 2.5em;

  &:nth-child(4) {
    margin-left: 24em;
  }

  &:nth-child(4),
  &:nth-child(5) {
    transform: translateY(1.8em);
    & img {
      transform: rotate(180deg) translateY(1.7em) scale(-1, 1);
    }

    @media ${themes.primary.media.minPC} {
      &:nth-child(4) {
        margin-left: 15em;
      }
      transform: translateY(1em);
      & img {
        transform: rotate(180deg) translateY(0.7em) scale(-1, 1);
      }
    }

    @media ${themes.primary.media.minPCFullHD} {
      transform: translateY(0.8em);
      & img {
        transform: scale(1.15) rotate(180deg) translateY(0.7em) scale(-1, 1);
      }
    }

    @media ${themes.primary.media.maxServiceMobile} {
      transform: translateY(2.8em);
      & img {
        transform: scale(0.95) rotate(180deg) translateY(3em) scale(-1, 1);
      }
    }
  }

  @media (max-width: 1300px) {
    &:nth-child(4) {
      margin-left: 15em;
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
`;

export const TextTitle = styled.h3`
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.secondary};
  margin-bottom: 0.5em;

  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.oneAndNine};
  }

  @media ${themes.primary.media.maxServiceMobile} {
    font-size: 1.6em;
  }
`;

export const TextContent = styled.p`
  margin-top: 0.5em;
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
  margin-bottom: 0;

  @media ${themes.primary.media.maxServiceMobile} {
    font-size: 1.3em;
  }
`;

export const PointsWrapper = styled.div`
  margin-top: 5em;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  column-gap: 14.5em;

  @media ${themes.primary.media.minPC} {
    column-gap: 13vw;
  }
  @media ${themes.primary.media.minPCFullHD} {
    column-gap: 11vw;
  }
`;
