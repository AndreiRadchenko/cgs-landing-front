import styled from "styled-components";
import themes from "../utils/themes";
import Decoration from "../components/Decoration/Decoration";

export const ProjectsContainer = styled.section`
  display: flex;
  position: relative;
`;

export const ProjectsCategoryRow = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  max-width: 1350px;
  margin: 0 auto;

  @media ${themes.primary.media.onlyTabletLandScape} {
    justify-content: flex-end;
  }

  @media ${themes.primary.media.maxMobile} {
    justify-content: center;
  }
`;

export const ProjectTitleWrapper = styled.div`
  flex: 1 1 400px;
  display: inline-block;

  @media ${themes.primary.media.minPC} {
    flex: 1 1 550px;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    flex: 1 1 335px;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    flex: 1 1 355px;
  }

  @media ${themes.primary.media.maxMobile} {
    flex: 1 1 430px;
    margin-bottom: 3em;
  }
`;

export const ProjectsTitle = styled.span`
  display: block;
  margin-left: 1em;
  font-size: 2em;
  font-weight: 700;
  font-family: ${themes.primary.font.family.roboto};
  position: relative;
  z-index: 2;

  @media ${themes.primary.media.onlyTabletLandScape} {
    font-size: 1.8em;
    margin-left: 0;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    font-size: 2em;
    width: 90%;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 95%;
  }
`;

export const DecorationTitle = styled(Decoration)`
  position: absolute;
  top: 1.9em;
  left: -1%;
  width: 13em;
  height: 1.7em;

  @media ${themes.primary.media.minPC} {
    top: 2%;
    left: 23.5%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    top: 2.3%;
    left: 27.3%;
  }

  @media ${themes.primary.media.onlyLaptop} {
    top: 2%;
    left: 24.3%;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    width: 11.3em;
    height: 1.6em;
    top: 6.7%;
    left: -0.5%;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    position: absolute;
    top: 2.5%;
    left: 37.5%;
  }

  @media ${themes.primary.media.maxMobile} {
    position: fixed;
    top: 3.7em;
    left: 27.5em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    top: 3.3em;
    left: 24.7em;
  }

  @media (max-width: 400px) {
    top: 5.6em;
    left: 3.6em;
  }
`;
