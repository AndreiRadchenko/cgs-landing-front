import styled from "styled-components";
import { infiniteText } from "../../styles/Animations.styled";
import themes from "../../utils/themes";

export const MovingText = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.bold} !important;
  text-transform: uppercase;
  overflow: hidden;
  margin-left: -10%;
  width: 130%;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  z-index: -5;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.mainGradientColor2} 0%,
    ${themes.primary.colors.mainGradientColor1} 100%
  );
  height: 56px;
  align-items: center;
  background-size: cover;
  font-size: 2.5em;
  line-height: 140%;

  &.rateCard {
    border: none;
    font-size: 24px !important;
    line-height: 56px !important;
    background: linear-gradient(
      90deg,
      ${themes.primary.colors.mainGradientColor2} 0%,
      ${themes.primary.colors.mainGradientColor1} 100%
    );
    width: inherit;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 24px !important;
    line-height: 233% !important;
    margin-bottom: 30px !important;

    &.withoutMargin {
      margin-bottom: 0 !important;
    }

    &.webDev {
      margin-left: -35%;
      width: 150%;
    }
  }

  @media ${themes.primary.media.minMobile} {
    display: none;
  }

  & > span {
    animation: 50s linear infinite ${infiniteText};
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 25px;
  }
  @media ${themes.primary.media.onlyPC} {
    font-size: 20px;
  }
  @media (min-width: 1800px) {
    font-size: 2em;
  }
  @media (min-width: 1500px) and (max-width: 2000px) {
    font-size: 1.6em;
  }
  @media (min-width: 1300px) and (max-width: 1400px) {
    font-size: 1.5em;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 233%;
  }
`;
