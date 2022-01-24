import styled from "styled-components";
import themes from "../utils/themes";

export const ProjectsContainer = styled.section`
  display: flex;
`;

export const ProjectTitleWrapper = styled.div`
  width: 55%;
  display: inline-block;
`;

export const ProjectsCategoryRow = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ProjectsTitle = styled.span`
  font-size: 2em;
  font-weight: 700;
  font-family: ${themes.primary.font.family.roboto};
`;
