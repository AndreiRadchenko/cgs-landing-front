import styled, { keyframes } from "styled-components";
import * as animations from "./AnimationsStyled";
import themes from "../utils/themes";
import Decoration from "../components/Decoration/Decoration";

export const OurTeamContainer = styled.section`
  position: relative;
  font-family: ${themes.primary.font.family.gilroy};
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
    height: 35.625em;
  }

  .our-main-goal-content {
    position: relative;
    grid-area: main-goal-content;
  }

  .our-philosophy-img {
    position: relative;
    bottom: -21%;
    grid-area: philosophy-img;
    height: 30.5em;
  }

  .our-philosophy-content {
    grid-area: philosophy-content;
  }

  @media ${themes.primary.media.onlyPC} {
    .our-main-goal-img {
      height: 40.375em;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    .our-main-goal-content {
      top: -1rem;
    }

    .our-main-goal-img {
      height: 23.375em;
      bottom: -18%;
    }

    .our-philosophy-img {
      height: 18.313em;
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

export const ImageWrapper = styled.div``;

export const OurTeamCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: ${themes.primary.font.family.gilroy};

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
  font-weight: ${themes.primary.font.weight.extraBold};
  z-index: 2;

  font-size: 40px;
`;

export const OurTeamCardDescription = styled.span`
  display: block;
  font-size: 26px;
  font-weight: ${themes.primary.font.weight.light};
  opacity: 0.7;
  white-space: break-spaces;
`;

export const DecorationClipIconLeft = styled.div`
  position: absolute;
  bottom: -20%;
  left: 63%;
  z-index: 3;
  transform: scale(0.9);

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
    top: -90%;
    left: -10%;

    &:hover {
      animation: none;
    }

    &.animate {
      animation: ${animations.rotateAnimationTabletPortraitLeft} 2s ease-in-out;
    }
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    transform: scale(0.5) rotate(65deg);

    &:hover {
      animation: none;
    }

    &.animate {
      animation: ${animations.rotateAnimationMobileLeft} 2s ease-in-out;
    }
  }
`;

export const DecorationClipIconRight = styled.div`
  position: absolute;
  top: -15%;
  right: -5%;
  transform: scale(0.8) rotate(65deg);
  z-index: 3;

  &:hover {
    animation: ${animations.rotateAnimationLaptopRight} 2.5s ease-in-out;
  }

  @media ${themes.primary.media.maxPCFullHD} {
    top: -25%;
    right: -5%;
    transform: scale(0.8) rotate(65deg);
    z-index: 3;

    &:hover {
      animation: ${animations.rotateAnimationLaptopRight} 2.5s ease-in-out;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    transform: scale(0.65) rotate(65deg);
    top: -45%;
    right: -18%;

    &:hover {
      animation: ${animations.rotateAnimationTabletRight} 1.5s ease-in-out;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    &:hover {
      animation: none;
    }

    &.animate {
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
    left: 3.5rem;
    width: 6em;
  }

  &.goal {
    left: 3.7rem;
    width: 5.5em;
  }
`;
