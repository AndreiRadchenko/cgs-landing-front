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
  z-index: -1;
  top: 1.5em;
  left: -1%;
  width: 11.2ch;
  height: .9em;
`;
