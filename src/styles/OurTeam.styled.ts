import styled from "styled-components";
import themes from "../utils/themes";
import Decoration from "../components/Decoration/Decoration";

export const OurTeamContainer = styled.section`
  margin: 0 auto 12.063em auto;
  position: relative;
  font-family: ${themes.primary.font.family.roboto};

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 100%;
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
    height: 30.625em;
  }

  .our-main-goal-content {
    grid-area: main-goal-content;
  }

  .our-philosophy-img {
    position: relative;
    grid-area: philosophy-img;
    height: 24.5em;
  }

  .our-philosophy-content {
    grid-area: philosophy-content;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    .our-main-goal-img {
      height: 20.375em;
    }

    .our-philosophy-img {
      height: 16.313em;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 20.625em;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: 335px;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      "main-goal-img"
      "philosophy-content"
      "philosophy-img"
      "main-goal-content";

    .our-main-goal-img,
    .our-philosophy-img {
      width: 335px;
      height: 243px;
    }

    .our-philosophy-img {
      height: 251px;
    }
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

  @media ${themes.primary.media.maxTabletPortrait} {
    transform: scale(0.5) rotate(65deg);
    top: -95%;
    left: -10%;
  }
`;

export const DecorationClipIconRight = styled.div`
  position: absolute;
  top: -15%;
  right: -3%;
  transform: rotate(65deg);
  z-index: 3;

  @media ${themes.primary.media.maxTabletPortrait} {
    transform: scale(0.5) rotate(65deg);
    top: -35%;
    right: -18%;
  }
`;

export const DecorationTextTitle = styled(Decoration)`
  position: absolute;
  top: 50%;
  height: 0.7em;
  z-index: -1;

  &.philosophy {
    left: 13%;
    width: 5.4em;
  }

  &.goal {
    bottom: 18%;
    left: 8.5%;
    width: 5em;
  }
`;
