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

  @media ${themes.primary.media.maxMobile} {
    justify-content: center;
  }
`;

export const ProjectTitleWrapper = styled.div`
  flex: 1 1 400px;
  position: relative;
  display: inline-block;

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
    width: 100%;
  }
`;

export const DecorationTitle = styled(Decoration)`
  position: fixed;
  top: 8%;
  left: 3.5%;
  width: 12.5em;
  height: 1.7em;

  @media ${themes.primary.media.maxMobile} {
    top: 5.5%;
    left: 48%;
  }
`;
