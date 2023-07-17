import styled, { css } from "styled-components";
import themes from "../utils/themes";
import { IIcon, ISlide } from "../types/Decoration.types";
import { float } from "./Animations.styled";

export const Container = styled.section`
  margin-top: 50px;
  margin-bottom: 140px;
  &.mobileAudit {
    margin-top: 8.95rem;
    margin-bottom: 10.2em;
  }

  &.mobileDev {
    margin-top: 1.4em;
  }

  @media ${themes.primary.media.maxMobile} {
    &.mobileAudit {
      margin-top: 26px;
      margin-bottom: 108px;
    }
    &.mobileDev {
      margin-top: 30px;
    }
    margin-top: 35px;
    margin-bottom: 60px;
  }
`;

export const ContentLayout = styled.div`
  margin-top: 29px;
  margin-inline: -50px;
  border-top: 1px solid ${themes.primary.colors.headerBorder};
  border-bottom: 1px solid ${themes.primary.colors.headerBorder};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));

  @media ${themes.primary.media.minPCFullHD} {
    margin-inline: -75px;
  }
  @media (max-width: 1141px) {
    margin-inline: -60px;
    grid-template-columns: repeat(1, minmax(375px, 1fr));
  }
  @media ${themes.primary.media.maxMobile} {
    border-top: none;
    margin-top: 0px;
    margin-inline: -22px;
  }
`;

export const WorthTitleContainer = styled.div`
  font-size: ${themes.primary.font.size.secondary};
  letter-spacing: 0.05em;
  display: flex;
  flex-direction: column;
  column-gap: 11px;
  align-items: center;
  font-weight: ${themes.primary.font.weight.heavy};
  -webkit-text-stroke: 0.2px black;

  p {
    font-size: 30px;
  }

  @media ${themes.primary.media.maxMobile} {
    p {
      font-size: 22px;
      margin-block: 16px;
    }
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    column-gap: 0;
  }
`;

export const WorthCardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 121px;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.gradientColor1RateCard} 0%,
    ${themes.primary.colors.gradientColor2RateCard} 100%
  );
  padding-inline: 24px;

  p {
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 24px;
    line-height: 160%;
    letter-spacing: 0.05em;
    color: ${themes.primary.colors.primary};
  }

  &.mobileDev p {
    font-size: 2em;
  }
  &.cloudSolutions p,
  &.mobileAudit p,
  &.dappAudit p {
    font-size: 1.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-inline: 20px;
    height: 80px;

    &.cloudSolutions p,
    &.mobileAudit p,
    &.mobileDev p,
    &.dappAudit p,
    p {
      font-size: 18px;
    }
  }
`;

export const WorthCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  scale: 0;
  transition: all 0.7s linear;
  background: ${themes.primary.colors.portfolioBg};
`;

export const WorthText = styled.p`
  padding: 28px 24px;
  margin: 0;
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 18px;
  line-height: 160%;
  max-width: 440px;

  &.mobileDev {
    font-size: 1.5em;
  }
  &.cloudSolutions,
  &.mobileAudit,
  &.dappAudit {
    font-size: 1.15em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 100%;
    & br {
      display: none;
    }
  }

  @media (max-width: 1260px) {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 5px;
  }
  @media ${themes.primary.media.maxMobile} {
    margin: 0;
    padding: 14px 20px;
    font-size: 16px;
    max-width: 100%;

    &.cloudSolutions,
    &.mobileAudit,
    &.mobileDev,
    &.dappAudit {
      font-size: 16px;
    }
  }
`;

export const WorthBlock = styled.div<ISlide>`
  position: relative;
  padding-top: 76px;
  height: 325px;

  &:not(:last-child) {
    border-right: 1px solid ${themes.primary.colors.headerBorder};
  }

  &:hover ${WorthCardInfo} {
    scale: 1;
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }
  &:hover ${WorthTitleContainer} {
    opacity: 0;
  }
  &:first-child ${WorthCardTitle} {
    padding-inline: 51px;
  }
  &:first-child ${WorthText} {
    padding: 28px 51px;
    max-width: initial;
  }
  &:last-child ${WorthTitleContainer} {
    &.mobileAudit {
      padding-inline: 101px;
      text-align: center;
    }
  }

  @media (max-width: 1141px) {
    &:not(:last-child) {
      border-right: none;
    }
    &:not(:first-child) {
      border-top: 1px solid ${themes.primary.colors.headerBorder};
    }
  }

  @media ${themes.primary.media.maxMobile} {
    height: 240px;

    &:first-child .iconCard {
      width: 17px;
      height: 29px;
    }
    &:nth-child(2) .iconCard {
      width: 25px;
      height: 25px;
    }
    &:last-child .iconCard {
      width: 25px;
      height: 35px;
    }

    &:first-child ${WorthCardTitle} {
      padding-inline: 20px;
    }
    &:first-child ${WorthText} {
      padding: 14px 20px;
    }

    &:last-child ${WorthTitleContainer} {
      &.mobileAudit {
        padding-inline: 61px;
        text-align: center;
      }
    }
  }
`;

export const Icon = styled.img<IIcon>`
  display: flex;
  margin-right: 0.3em;
  animation: ${({ xOffset }) =>
    css`
      ${float(xOffset)} 3s infinite linear
    `};

  &.iconCard {
    animation: none;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    animation: none;
  }
`;

export const WhoNeedContainer = styled.div`
  padding: 30px;
  min-height: 275px;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.gradientColor1RateCard} 0%,
    ${themes.primary.colors.gradientColor2RateCard} 100%
  );
  margin-bottom: 70px;
  display: flex;
  gap: 97px;
  align-items: center;

  @media ${themes.primary.media.maxMobile} {
    background: transparent;
    flex-direction: column;
    gap: 20px;
    padding: 0 20px 60px;
    align-items: flex-start;
    border-bottom: 1px solid ${themes.primary.colors.headerBorder};
    margin-inline: -20px;
    margin-bottom: 0px;
  }
`;

export const WhoNeedAppsBlocks = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: auto;

  @media ${themes.primary.media.minLaptop} {
    min-width: 477px;
  }
`;

export const WhoNeedSubText = styled.div`
  max-width: 477px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid ${themes.primary.colors.borderRateCard};
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;

  @media ${themes.primary.media.minPCFullHD} {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1rem;
    margin-top: 1em;
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    border-top: none;
    font-size: 16px;
    max-width: none;

    padding: 0;
    margin-top: 0.6em;
    margin-bottom: -3px;
  }
`;

export const WhoNeedAppsBlockImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;

  @media ${themes.primary.media.maxMobile} {
    gap: 12px;
  }
`;

export const WhoNeedAppsBlockImageCard = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0.417em 1.42em;
  height: 53px;
  border: 1px solid ${themes.primary.colors.primary};

  span {
    font-family: ${themes.primary.font.family.namu};
    font-weight: 900;
    font-size: 1.5em;
    line-height: 160%;
  }

  @media ${themes.primary.media.maxMobile} {
    height: 48px;
    padding: 5px 13px;

    span {
      font-size: 16px;
    }
  }
`;
