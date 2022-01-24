import styled from "styled-components";
import themes from "../utils/themes";

export const ProjectsContainer = styled.section`
  display: flex;
`;

export const ProjectsCategoryRow = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  max-width: 1350px;
  margin: 0 auto;
`;

export const ProjectTitleWrapper = styled.div`
  flex: 1 1 25em;

  display: inline-block;
`;

export const ProjectsTitle = styled.span`
  display: block;
  margin-left: 1em;
  font-size: 2em;
  font-weight: 700;
  font-family: ${themes.primary.font.family.roboto};
`;