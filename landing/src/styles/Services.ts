import styled, { css } from "styled-components";
import themes from "../utils/themes";
import { IIcon, ISlide } from "../types/Decoration.types";
import { float } from "./Animations.styled";

export const Container = styled.section`
  margin-top: 50px;
  margin-bottom: 60px;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 35px;
    margin-bottom: 45px;
  }
`;

export const ContentLayout = styled.div`
  margin-top: 29px;
  margin-inline: -50px;
  border-top: 1px solid ${themes.primary.colors.headerBorder};
  border-bottom: 1px solid ${themes.primary.colors.headerBorder};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));

  @media (max-width: 1141px) {
    margin-inline: -60px;
    grid-template-columns: repeat(1, minmax(375px, 1fr));
  }

  @media ${themes.primary.media.maxMobile} {
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

  @media ${themes.primary.media.maxLowScreenMobile} {
    column-gap: 0;
  }
`;

export const WorthCardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: 121px;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.gradientColor1RateCard} 0%,
    ${themes.primary.colors.gradientColor2RateCard} 100%
  );
  padding-inline: 50px;

  p {
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 24px;
    line-height: 160%;
    letter-spacing: 0.05em;
    color: ${themes.primary.colors.primary};
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
`;

export const WorthBlock = styled.div<ISlide>`
  position: relative;
  padding-top: 76px;
  height: 325px;

  &:not(:last-child) {
    border-right: 1px solid ${themes.primary.colors.headerBorder};
  }

  &:hover ${WorthCardInfo} {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  &:hover ${WorthTitleContainer} {
    display: none;
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
  }
`;

export const WorthText = styled.p`
  padding: 28px 24px;
  margin: 0;
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 18px;
  line-height: 160%;
  background: ${themes.primary.colors.portfolioBg};

  @media ${themes.primary.media.minPCFullHD} {
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

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-bottom: 1.28em;
    max-width: 20.5em;
  }
`;

export const Icon = styled.img<IIcon>`
  display: flex;
  margin-right: 0.3em;
  animation: ${({ xOffset }) =>
    css`
      ${float(xOffset)} 3s infinite linear
    `};

  @media ${themes.primary.media.maxTabletLandScape} {
    animation: none;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-right: 0;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-right: 0.3em;
    &:first-child {
      width: 17px;
    }

    &:nth-child(2) {
      width: 21px;
    }

    &:nth-child(3) {
      width: 29px;
    }
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
  gap: 70px;
  align-items: center;

  @media ${themes.primary.media.maxMobile} {
    background: transparent;
    flex-direction: column;
    gap: 20px;
    padding: 0;
    align-items: flex-start;
  }
`;

export const WhoNeedAppsBlocks = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const WhoNeedSubText = styled.p`
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
    margin: 0;
  }
`;

export const WhoNeedAppsBlockImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
`;

export const WhoNeedAppsBlockImageCard = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid ${themes.primary.colors.primary};
`;
