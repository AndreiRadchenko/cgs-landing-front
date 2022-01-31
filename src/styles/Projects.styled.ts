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
`;

export const ProjectTitleWrapper = styled.div`
  flex: 1 1 400px;
  display: inline-block;
`;

export const ProjectsTitle = styled.span`
  display: block;
  margin-left: 1em;
  font-size: 2em;
  font-weight: 700;
  font-family: ${themes.primary.font.family.roboto};
  position: relative;
  z-index: 2;
`;

export const DecorationTitle = styled(Decoration)`
  position: absolute;
  top: 1.9em;
  left: -1%;
  width: 11.2ch;
  height: 0.7em;
  
    @media ${themes.primary.media.minPC} {
    top: 15%;
    left: 4%;
  }

  @media ${themes.primary.media.onlyLaptop} {
    top: 5%;
    left: 48%;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    width: 11em;
    height: 1.3em;
    top: 13%;
    left: 4%;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    position: absolute;
    top: 6.5%;
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

  @media (max-width: 378px) {
    top: 5.6em;
    left: 3.6em;
  }
`;
