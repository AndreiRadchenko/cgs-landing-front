import styled from "styled-components";
import themes from "../utils/themes";
import Decoration from "../components/Decoration/Decoration";

export const OurTeamContainer = styled.section`
  width: 1400px;
  margin: 0 auto 193px auto;
  position: relative;
  font-family: ${themes.primary.font.family.roboto};
`;

export const OurTeamRow = styled.div`
  display: flex;

  justify-content: space-between;
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

export const OurTeamCardContent = styled.div``;

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
`;

export const DecorationClipIconLeft = styled.div`
  position: absolute;
  bottom: 15%;
  left: 40%;
  z-index: 3;
`;

export const DecorationClipIconRight = styled.div`
  position: absolute;
  bottom: 36%;
  right: 4%;
  transform: rotate(65deg);
  z-index: 3;
`;

export const DecorationTextTitle = styled(Decoration)`
  position: absolute;
  height: 1.7em;

  &.philosophy {
    top: 8.7%;
    right: 55%;
    width: 14em;
  }

  &.goal {
    bottom: 18%;
    left: 8%;
  }
`;
