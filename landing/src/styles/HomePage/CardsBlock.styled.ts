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
  transition: all 0.3s;
  filter: drop-shadow(7px 2px 0px ${themes.primary.colors.primary})
    grayscale(100%);
  transition: filter 1s;

  &.scrolled {
    background: linear-gradient(
      90deg,
      ${themes.primary.colors.mainGradientColor1} 0%,
      ${themes.primary.colors.mainGradientColor2} 100%
    );
    filter: drop-shadow(7px 2px 0px ${themes.primary.colors.primary})
      grayscale(0%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

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
    padding-right: 10px;
    margin-right: 15px;

    filter: drop-shadow(
      4.1358px 1.18166px 0px ${themes.primary.colors.primary}
    );

    &.scrolled {
      filter: drop-shadow(
        4.1358px 1.18166px 0px ${themes.primary.colors.primary}
      );
    }
  }
  @media (max-width: 360px) {
    font-size: 80px;
    line-height: 98px;
    transform: translateY(10px);
  }
`;

export const Title = styled.h2`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 140%;
  font-size: ${themes.primary.font.size.aboutUsSubtitle};
  margin: 0;
  text-transform: uppercase;

  @media ${themes.primary.media.minPCFullHD} {
    padding-bottom: 20px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.reviewTitle};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5rem;
    padding-bottom: 0;
    line-height: 233%;
    display: none;
  }
`;

export const CardsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 50px;

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    row-gap: 0;

    ::after {
      content: "";
      height: 1px;
      position: absolute;
      background-color: ${themes.primary.colors.headerBorder};
      width: 250%;
      bottom: -5%;
      left: -10%;
    }
  }
`;

export const CardContainer = styled.article`
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
      & > img {
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
        top: -80%;
        right: 40%;
      }

      & div {
        margin-top: 0px !important;
      }
    }
  }
  @media ${themes.primary.media.maxMobile} {
    justify-self: start !important;
    ::after {
      content: "";
      height: 1px;
      position: absolute;
      background-color: ${themes.primary.colors.headerBorder};
      width: 100%;
      bottom: 0;
      left: 0%;
    }

    &:nth-child(1)::after {
      bottom: -1em;
    }

    &:nth-child(2)::after {
      bottom: -1em;
    }

    &:nth-child(3) {
      margin-top: 2em;
      ::after {
        bottom: -1em;
      }
    }

    padding-top: 0px;
    margin-bottom: 30px;
    padding-bottom: 29px;

    :last-child {
      ::after {
        content: none;
      }
      margin-bottom: 0;
    }

    :first-child {
      margin-top: -40px;
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

export const CardImage = styled.img`
  @media ${themes.primary.media.maxMobile} {
    display: none !important;
  }
`;
