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
    justify-content: center;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    justify-content: center;
  }

  @media ${themes.primary.media.maxMobile} {
    justify-content: center;
  }
`;

export const ProjectTitleWrapper = styled.div`
  flex: 1 1 400px;
  position: relative;
  display: inline-block;

  @media ${themes.primary.media.onlyTabletLandScape} {
    flex: 1 1 500px;
    margin-bottom: 3em;
  }

  
  @media ${themes.primary.media.onlyTabletPortrait} {
    flex: 1 1 460px;
    margin-bottom: 3em;
  }
  
  
  @media ${themes.primary.media.maxMobile} {
    flex: initial;
    margin-bottom: 2em;
  }
`;

export const ProjectsTitle = styled.span`
  display: block;
  margin-left: 1em;
  font-size: 2em;
  font-weight: 700;
  font-family: ${themes.primary.font.family.roboto};
  position: relative;
  z-index: 4;

  @media ${themes.primary.media.maxMobile} {
    display: inline-block;
    width:100%;
  }
  
  @media(min-width: 640px) {
    width: 80%;
  }
`;

export const DecorationTitle = styled(Decoration)`
  position: absolute;
  top: 3.8em;
  left: 28em;
  width: 12.5em;
  height: 1.7em;
  
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
