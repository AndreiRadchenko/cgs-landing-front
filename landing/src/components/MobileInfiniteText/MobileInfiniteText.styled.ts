import styled from "styled-components";
import { infiniteText } from "../../styles/Animations.styled";
import themes from "../../utils/themes";

export const MovingText = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.bold} !important;
  text-transform: uppercase;
  font-size: 20px;
  overflow: hidden;
  margin-left: -10%;
  width: 130%;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  z-index: -5;
  background: linear-gradient(
    61.63deg,
    ${themes.primary.colors.mainGradientColor1} 0%,
    ${themes.primary.colors.mainGradientColor2} 100%
  );
  border: 1px solid ${themes.primary.colors.headerBorder};
  height: 2em;
  display: flex;
  align-items: center;
  background-size: cover;
  font-size: 2.5em;
  font-weight: inherit;
  line-height: 140%;

  @media ${themes.primary.media.maxMobile} {
    font-size: 24px !important;
    line-height: 233% !important;
    margin-bottom: 30px !important;

    &.withoutMargin {
      margin-bottom: 0 !important;
    }
  }

  @media ${themes.primary.media.minMobile} {
    display: none;
  }

  & > span {
    animation: ${infiniteText} 50s infinite linear;
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
    width: 200%;
    margin-left: -50%;
  }
`;
