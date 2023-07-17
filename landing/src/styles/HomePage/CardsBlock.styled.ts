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
  filter: drop-shadow(7px 2px 0px ${themes.primary.colors.primary});

  &.scrolled {
    background: linear-gradient(
      90deg,
      ${themes.primary.colors.mainGradientColor1} 20%,
      ${themes.primary.colors.mainGradientColor2} 100%
    );
    filter: drop-shadow(7px 2px 0px ${themes.primary.colors.primary});
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
    margin-right: 4px;

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
      bottom: 0;
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
    top: -1em;
    justify-self: flex-end;
    & img {
    }
  }

  &:nth-child(2) {
    margin-top: -4em;
    & img {
      top: -80%;
      right: 60%;
    }
  }
  &:nth-child(3) {
    & img {
      top: -68%;
      left: 30%;
    }
  }

  &:nth-child(4) {
    & img {
      top: -105%;
      right: 40%;
    }

    & div {
      margin-top: 10px;
    }
  }

  @media ${themes.primary.media.minPC} {
    &:nth-child(2) {
      margin-top: 0;
      & img {
        top: -87%;
        right: 30%;
      }
    }
    &:nth-child(3) {
      & img {
        top: -77%;
        left: 20%;
      }
    }
    &:nth-child(4) {
      & img {
        top: -97%;
        right: 45%;
      }
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    & img {
      width: 20em;
    }
    &:nth-child(2) {
      & img {
        width: 27em;
        top: -107%;
        right: 30%;
      }
    }
    &:nth-child(3) {
      & img {
        top: -73%;
        left: 20%;
      }
    }
    &:nth-child(4) {
      & img {
        width: 25em;
        top: -120%;
        right: 45%;
      }
    }
  }

  @media (min-width: 2400px) {
    &:nth-child(2) {
      & img {
        top: -110%;
        right: 50%;
      }
    }
    &:nth-child(3) {
      & img {
        top: -72%;
        left: 25%;
      }
    }
    &:nth-child(4) {
      & img {
        top: -125%;
        right: 50%;
      }
    }
  }

  @media (max-width: 1350px) {
    &:nth-child(2) {
      & img {
        right: 40%;
      }
    }

    &:nth-child(3) {
      & img {
        left: 25%;
      }
    }

    &:nth-child(4) {
      & img {
        right: 30%;
      }
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    & img {
      width: 18em;
    }
    &:nth-child(2n-1) {
      & img {
        top: -80%;
        left: 18%;
      }
    }

    &:nth-child(2n) {
      & img {
        top: -80%;
        right: 45%;
      }
    }

    &:nth-child(2) {
      & img {
        top: -60%;
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

  @media (max-width: 1100px) {
    &:nth-child(2) {
      & img {
        top: -85%;
        right: 35%;
      }
    }
    &:nth-child(3) {
      & img {
        width: 15em;
        top: -70%;
        left: 10%;
      }
    }
    &:nth-child(4) {
      & img {
        top: -90%;
        right: 30%;
      }
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    &:nth-child(2n-1) {
      & > img {
        top: -80%;
        left: 13%;
      }
    }

    &:nth-child(2) {
      & img {
        right: 20%;
        top: -75%;
      }
    }

    &:nth-child(4) {
      & img {
        top: -100%;
        right: 10%;
      }

      & div {
        margin-top: 0px;
      }
    }
  }

  @media (max-width: 870px) {
    &:nth-child(2) {
      & img {
        right: 10%;
      }
    }
    &:nth-child(3) {
      & img {
        top: -72%;
        left: 5%;
      }
    }
    &:nth-child(4) {
      & img {
        right: 10%;
      }
    }
  }

  @media (max-width: 800px) {
    &:nth-child(2) {
      & img {
        top: -80%;
        right: 5%;
      }
    }
    &:nth-child(3) {
      & img {
        width: 13em;
        left: 3%;
      }
    }
    &:nth-child(4) {
      & img {
        width: 15em;
        top: -95%;
        right: 5%;
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

    &:nth-child(2) {
      margin-top: 0;
      ::after  {
        bottom: -1em;
      }
    }

    &:nth-child(3) {
      margin-top: -2em;
      ::after {
        bottom: -1em;
      }
    }

    padding-top: 0px;
    margin-bottom: 38px;
    padding-bottom: 20px;

    :last-child {
      ::after {
        content: none;
      }
      margin-bottom: 0;
    }

    :first-child {
      margin-top: -18px;
    }
  }
`;

export const CardTitle = styled.div`
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.homeCardSubtitle};
  display: flex;
  align-items: flex-end;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 4.45em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.bigTitle};
  }

  @media ${themes.primary.media.maxMobile} {
    max-width: 700px;

    &.last {
      margin-bottom: 22px;
    }
  }

  @media (max-width: 475px) {
    max-width: 350px;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    max-width: 300px;
  }
`;

export const CardSubtitle = styled.div`
  line-height: 110%;

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 34px;
  }
  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
`;

export const CardContent = styled.div`
  line-height: 160%;
  margin-top: 10px;
  font-weight: ${themes.primary.font.weight.heavy};
  max-width: 595px;
  font-size: ${themes.primary.font.size.feedbackName};
  display: inline-block;

  @media ${themes.primary.media.minPC} {
    max-width: 800px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    max-width: 1000px;
  }
  @media (min-width: 2400px) {
    max-width: 1200px;
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
    max-width: 800px;
    margin-top: 22px;
    font-size: 1rem;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    max-width: 335px;
    font-size: 1rem;
  }
`;

export const CardImage = styled.img`
  @media ${themes.primary.media.maxMobile} {
    display: none !important;
  }
`;
