import styled from "styled-components";
import themes from "../utils/themes";
import { IIcon, ISlide } from "../types/Decoration.types";

export const Container = styled.section`
  margin-top: 140px;
  margin-bottom: 138px;

  &.mobileAudit {
    margin-top: 8.95rem;
    margin-bottom: 10.2em;
  }

  &.cloudSolutions {
    margin-top: 45px;
  }

  &.mobileDev {
    margin-top: 7.3em;

    & .card {
      height: 231px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    &.mobileDev {
      & .card {
        height: 265px;
      }
    }
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 35px;
    margin-bottom: 60px;

    &.mobileAudit {
      margin-top: 26px;
      margin-bottom: 108px;
    }

    &.mobileDev {
      margin-top: 30px;

      & .card {
        height: 182px;
      }
    }

    &.cloudSolutions {
      margin-top: 35px;
    }
  }
`;

export const ContentLayout = styled.div`
  display: grid;
  margin-top: 29px;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media ${themes.primary.media.maxTabletLandScape} {
    grid-template-columns: repeat(1, minmax(300px, 1fr));
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 16px;
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
  gap: 16px;
  height: 80px;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.gradientColor1RateCard} 0%,
    ${themes.primary.colors.gradientColor2RateCard} 100%
  );
  padding-inline: 16px;

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
    height: 72px;
    gap: 8px;

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
  background: ${themes.primary.colors.portfolioBg};
`;

export const WorthText = styled.p`
  padding: 29px 21px;
  margin: 0;
  border-top: 3px solid black;
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 18px;
  line-height: 160%;

  &.mobileDev {
    font-size: 1.5em;
  }
  &.cloudSolutions,
  &.mobileAudit,
  &.dappAudit {
    font-size: 1.15em;
  }

  @media ${themes.primary.media.minPC} {
    &.mobileAudit {
      font-size: 1em;
    }

    & br {
      display: none;
    }
  }

  @media (max-width: 1260px) {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 0;
    padding: 16px;
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

export const ShadowContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: -1;
  margin: 8px 0 0 8px;
  border: 1px solid ${themes.primary.colors.black};
`;

export const BlackShadow = styled.div`
  height: 80px;
  width: 100%;
  background: ${themes.primary.colors.black};
  outline: 1px solid ${themes.primary.colors.black};

  @media ${themes.primary.media.maxMobile} {
    height: 72px;
  }
`;

export const WorthBlock = styled.div<ISlide>`
  position: relative;
  padding-top: 102px;
  height: 260px;
  border: 1px solid black;

  @media ${themes.primary.media.minPC} {
    height: 245px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 265px;
  }

  @media ${themes.primary.media.maxMobile} {
    height: 208px;
    padding: 65px;

    .iconCard {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Icon = styled.img<IIcon>`
  display: flex;
`;

export const WhoNeedContainer = styled.div`
  padding: 30px;
  min-height: 275px;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.gradientColor1RateCard} 0%,
    ${themes.primary.colors.gradientColor2RateCard} 100%
  );
  margin-bottom: 90px;
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
