import styled, { css } from "styled-components";
import themes from "../../utils/themes";
import BlockchainServices from "../../../public/BlockchainServicePage/BlockchainServices.svg";
import MobileService from "../../../public/BlockchainServicePage/Services-mobile-bg.svg";
import { slideDownText } from "../Animations.styled";
import { ISlide } from "../../types/Decoration.types";

export const Container = styled.section`
  margin-top: 9.8em;
  @media ${themes.primary.media.maxMobile} {
    margin-top: 4em;
  }
`;

export const Title = styled.h2`
  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 132%;
  }
  margin: 0;
  font-size: 2.5em;
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;
  max-width: 13.75em;
`;

export const SubTextContainer = styled.div`
  width: 100vw;
  height: 16.66vw;
  margin: 2.625em 0 0 -3.25em;
  background-image: url(${BlockchainServices.src});
  background-size: contain;
  background-position: bottom right;
  background-repeat: no-repeat;
  @media ${themes.primary.media.minPC} {
    margin-left: -3.6em;
    & > div > p {
      margin-bottom: 5.8%;
    }
  }
  @media (min-width: 1700px) {
    & > div > p {
      margin-bottom: 6.3%;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    margin-left: -3.5em;
    & > div > p {
      margin-bottom: 4.8%;
    }
  }
  @media (min-width: 2000px) {
    & > div > p {
      margin-bottom: 5.8%;
    }
  }
  @media (min-width: 2200px) {
    margin-left: -3.1em;
    & > div > p {
      margin-bottom: 5%;
    }
  }
  @media (min-width: 2400px) {
    & > div > p {
      margin-bottom: 2.15vw;
    }
  }
  @media (min-width: 2700px) {
    & > div > p {
      margin-bottom: 2.45vw;
    }
  }
  @media (min-width: 3600px) {
    & > div > p {
      margin-bottom: 2.8vw;
    }
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    margin-left: -3.8em;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    background-image: url(${MobileService.src});
    margin: 0 0 0 -4em;
    width: 992px;
    height: 683px;
  }
  @media ${themes.primary.media.maxMobile} {
    margin-left: -2.8em;
    width: 768px;
    height: 500px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 385px;
    height: 267px;
    margin-left: -1.2em;
  }
  @media ${themes.primary.media.maxLowestScreenMobile} {
    width: 374px;
    height: 260px;
  }
`;

export const Subtitle = styled.h2`
  margin: 20px 0;
  text-transform: uppercase;
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 1.82em;

  @media (max-width: 768px) {
    display: none;
  }
`;


export const SubTextContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20%;
  padding-left: 7%;
  width: 100%;

  @media ${themes.primary.media.minPCTwoThousand} {
    padding-left: 9%;
  }

  @media (max-width: 1100px) {
    column-gap: 18vw;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    display: block;
    padding: 66px 0 0 0;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-top: 38px;
  }

  @media (max-width: 600px) {
    padding-top: 42px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    padding-top: 32px;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    padding-top: 25px;
  }
`;

export const SubText = styled.p<ISlide>`
  font-size: 1.5em;
  line-height: 233%;
  text-transform: uppercase;
  margin: -12px 0 1.7vw 2em;
  padding: 0;
  opacity: 0;
  white-space: nowrap;

  &.scrolled {
    transform-origin: top center;
    animation: ${({ ind }) =>
      css`
        ${slideDownText} 700ms ${ind * 100}ms ease-in forwards
      `};
  }

  @media (min-width: 2900px) {
    margin-top: -0.5%;
  }

  @media (min-width: 3300px) {
    margin-top: 0;
  }

  @media (max-width: 1350px) {
    margin-block: -9px 1.8vw;
    font-size: 1.2em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-block: -10px 19px;
  }

  @media (max-width: 1100px) {
    margin-block: -11px 1.55vw;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 2em;
    line-height: normal;
    margin: 0 0 78px 0;
    padding-left: 4em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    margin-bottom: 52px;
    padding-left: 5em;
    &:first-child {
      padding-top: 6px;
    }
  }

  @media (max-width: 600px) {
    font-size: 1.2em;
    margin-bottom: 57px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 1em;
    padding-left: 3.5em;
    margin-bottom: 22px;

    &:first-child {
      padding-top: 0px;
    }
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    font-size: 0.8em;
    margin-bottom: 25px;
  }
`;

export const DescriptionContainer = styled.div`
  margin-top: 7.5em;
  padding: 0 2.75em;
  display: flex;
  justify-content: center;

  @media ${themes.primary.media.onlyTabletPortrait} {
    padding: 0 1em;
  }

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin-top: 2.81em;
    border-bottom: 1px solid ${themes.primary.colors.headerBorder};
    padding-bottom: 60px;
    margin-inline: -20px;
  }
`;

export const Image = styled.img`
  width: 40em;
  height: 31.25em;
  margin: 0;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 28em;
  }
  @media ${themes.primary.media.maxMobile} {
    width: 22.19em;
    height: auto;
    margin-left: -10px;
  }
`;

export const Description = styled.div`
  font-size: 1.375em;
  line-height: 160%;
  margin: 4em 0 0;
  max-width: 27.95em;

  p {
    margin: 0;
    display: inline;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    margin: 2em 0 0;
    max-width: 90%;
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin: 1.565em 0 0;
    width: 21em;

    p {
      display: block;
    }
  }

  @media (max-width: 475px) {
    margin-top: 1em;
  }
`;
