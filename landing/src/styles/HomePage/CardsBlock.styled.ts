import styled from "styled-components";
import themes from "../../utils/themes";

export const BigDigit = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-style: normal;
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 150px;
  line-height: 150px;

  margin: 0;
  margin-right: 25px;
  color: ${themes.primary.colors.blogBackground};
  -webkit-text-stroke: 2px ${themes.primary.colors.primary};
  text-shadow: 7px 2px 0px ${themes.primary.colors.primary};

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 110px;
    line-height: 120px;
  }

  @media ${themes.primary.media.maxMobile} {
    transform: translateY(4px);
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 88px;
    line-height: 89px;
    transform: translateY(2px);
    text-shadow: 4.1358px 1.18166px 0px ${themes.primary.colors.primary};
  }
  @media (max-width: 360px) {
    font-size: 80px;
    line-height: 98px;
    transform: translateY(10px);
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 50px;

  @media ${themes.primary.media.maxMobile} {
    row-gap: 0;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  & img {
    position: absolute;
  }

  &:nth-child(2n) {
    justify-self: flex-end;
    & img {
    }
  }

  &:nth-child(2) {
    & img {
      top: -85%;
      right: 60%;
    }
  }
  &:nth-child(3) {
    & img {
      top: -70%;
      left: 30%;
    }

    & div {
      margin-top: -20px;
    }
  }

  &:nth-child(4) {
    & img {
      top: -80%;
      right: 40%;
    }

    & div {
      margin-top: 33.7px;
    }
  }

  @media ${themes.primary.media.minPC} {
    &:nth-child(4) {
      & img {
        top: -70%;
        right: 30%;
      }
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    &:nth-child(2) {
      & img {
        top: -85%;
        right: 40%;
      }
    }
    &:nth-child(3) {
      & img {
        top: -70%;
        left: 20%;
      }
    }
    &:nth-child(4) {
      & img {
        top: -60%;
        right: 10%;
      }
    }
  }

  @media (max-width: 1350px) {
    &:nth-child(2) {
      & img {
        right: 20%;
      }
    }

    &:nth-child(4) {
      & img {
        right: 10%;
      }
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    &:nth-child(2n-1) {
      & img {
        top: -100%;
        left: 15%;
      }
    }

    &:nth-child(2n) {
      & img {
        right: 10%;
      }
    }

    &:nth-child(3) {
      & p {
        & span {
          max-width: 72%;
        }
      }
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    &:nth-child(2n-1) {
      & img {
        transform: scale(0.8);
        top: -100%;
        left: 3%;
      }
    }

    &:nth-child(2) {
      & img {
        transform: scale(0.8);
        right: -1%;
      }
    }

    &:nth-child(4) {
      & img {
        transform: scale(0.6);
        right: -10%;
      }
      & > div {
        margin-top: 20px;
      }
    }
  }
  @media ${themes.primary.media.maxMobile} {
    &:nth-child(n) {
      justify-self: center;
      padding-top: 187px;
      & img {
        top: 0;
        right: 0;
        left: 0;
        margin: 0 auto;
        max-width: 310px;
        transform: none;
      }
    }

    &:first-child {
      padding-top: 0;
    }

    &:nth-child(2) {
      padding-top: 175px;
      & img {
        transform: rotate(5.8deg);
      }
    }
    &:nth-child(3) {
      & p {
        & span {
          max-width: 100%;
          display: block;
        }
      }
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    &:nth-child(n) {
      & img {
        max-width: none;
      }
    }
    &:nth-child(2n) {
      & img {
        top: -38%;
        left: -29%;
        width: 155%;
      }
    }
    &:nth-child(3) {
      & img {
        top: -15%;
        left: -7.5%;
        width: 115%;
      }
    }

    &:nth-child(4) {
      & div {
        margin-top: 0;
      }
    }
  }
  @media (max-width: 360px) {
    &:nth-child(n) {
      & img {
        top: -10%;
      }
    }
  }
`;

export const CardTitle = styled.div`
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.homeCardSubtitle};
  display: flex;
  align-items: flex-end;
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.bigTitle};
  }

  @media ${themes.primary.media.maxMobile} {
    max-width: 350px;
  }
  @media ${themes.primary.media.maxLowestScreenMobile} {
    max-width: 300px;
  }
`;

export const CardSubtitle = styled.div`
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 34px;
  }
  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
`;

export const CardContent = styled.p`
  line-height: 160%;
  margin-top: 10px;
  font-weight: ${themes.primary.font.weight.heavy};
  max-width: 720px;
  font-size: ${themes.primary.font.size.feedbackName};
  display: inline-block;

  @media ${themes.primary.media.minPC} {
    max-width: 800px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    max-width: 1000px;
    & br {
      display: none;
    }
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    max-width: 600px;
    font-size: ${themes.primary.font.size.tertiary};
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    max-width: 500px;
  }
  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 0;
    max-width: 380px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    max-width: 335px;
    font-size: 1rem;
    & br {
      display: none;
    }
  }
`;

export const CardImage = styled.img``;
