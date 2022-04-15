import styled, { keyframes } from "styled-components";
import * as animations from "./AnimationsStyled";
import themes from "../utils/themes";
import Decoration from "../components/Decoration/Decoration";

export const OurTeamContainer = styled.section`
  position: relative;
  font-family: ${themes.primary.font.family.roboto};
  margin-bottom: 200px;

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 100%;
    margin-bottom: 150px;
  }
  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 100px;
  }
`;

export const OurTeamRow = styled.div`
  display: grid;
  gap: 34px;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "main-goal-img philosophy-content"
    "main-goal-img philosophy-img"
    "main-goal-content philosophy-img";

  .our-main-goal-img {
    position: relative;
    grid-area: main-goal-img;
    height: 37.625em;
  }

  .our-main-goal-content {
    grid-area: main-goal-content;
  }

  .our-philosophy-img {
    position: relative;
    bottom: -21%;
    grid-area: philosophy-img;
    height: 26.5em;
  }

  .our-philosophy-content {
    grid-area: philosophy-content;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    .our-main-goal-img {
      height: 23.375em;
    }

    .our-philosophy-img {
      height: 16.313em;
      bottom: -17%;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 25.625em;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: 340px;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      "main-goal-img"
      "philosophy-content"
      "philosophy-img"
      "main-goal-content";

    .our-main-goal-img,
    .our-philosophy-img {
      width: 340px;
      height: 243px;
    }

    .our-philosophy-img {
      height: 251px;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    grid-template-columns: 100%;
    .our-main-goal-img,
    .our-philosophy-img {
      width: 100%;
    }
    width: 20rem;
  }
`;

export const OurTeamCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: ${themes.primary.font.family.roboto};

  &:nth-child(even) {
    width: 45%;

    justify-content: flex-end;
    align-items: flex-start;
    & div {
      order: -1;

      width: 85%;
      margin-bottom: 32px;
    }
  }

  &:nth-child(odd) {
    width: 55%;
    align-items: flex-start;
  }
`;

export const OurTeamCardContent = styled.div`
  position: relative;
`;

export const OurTeamCardTitle = styled.h2`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  position: relative;
  z-index: 2;

  font-size: 40px;
`;

export const OurTeamCardDescription = styled.span`
  display: block;
  font-size: 26px;
  font-weight: 300;
  opacity: 0.7;
  white-space: break-spaces;
`;

export const DecorationClipIconLeft = styled.div`
  position: absolute;
  bottom: -25%;
  left: 63%;
  z-index: 3;
  &:hover {
    animation: ${animations.rotateAnimationLaptopLeft} 1.5s ease-in-out;
  }
  @media ${themes.primary.media.onlyTabletLandScape} {
    transform: scale(0.65) rotate(65deg);
    bottom: -30%;
    &:hover {
      animation: ${animations.rotateAnimationTabletLeft} 1.5s ease-in-out;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    transform: scale(0.65) rotate(65deg);
    top: -95%;
    left: -10%;
    &:hover {
      animation: ${animations.rotateAnimationTablerPortraitLeft} 2s ease-in-out;
    }
  }
`;

export const DecorationClipIconRight = styled.div`
  position: absolute;
  top: -25%;
  right: -5%;
  transform: scale(0.8) rotate(65deg);
  z-index: 3;
  &:hover {
    animation: ${animations.rotateAnimationLaptopRight} 2.5s ease-in-out;
  }
  @media ${themes.primary.media.onlyTabletLandScape} {
    transform: scale(0.65) rotate(65deg);
    top: -35%;
    right: -18%;
    &:hover {
      animation: ${animations.rotateAnimationTabletRight} 1.5s ease-in-out;
    }
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    transform: scale(0.65) rotate(65deg);
    top: -35%;
    right: -18%;
    &:hover {
      animation: ${animations.rotateAnimationTablerPortraitRight} 2.5s
        ease-in-out;
    }
  }
`;

export const DecorationTextTitle = styled(Decoration)`
  position: absolute;
  top: 50%;
  height: 0.7em;
  z-index: -1;

  &.philosophy {
    left: 12%;
    width: 5.4em;
  }

  &.goal {
    bottom: 18%;
    left: 8%;
    width: 5em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    &.philosophy {
      left: 18%;
      width: 5.4em;
    }

    &.goal {
      bottom: 18%;
      left: 13%;
      width: 5em;
    }
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    &.goal {
      left: 17%;
    }
  }
`;
