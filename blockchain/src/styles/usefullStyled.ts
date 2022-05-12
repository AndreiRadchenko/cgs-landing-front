import styled from "styled-components";
import themes from "../utils/themes";

export const TitlePlusContentBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export const DefaultGrid = styled.div`
  display: grid;
  margin: 0;
  padding: 0;
`;

export const HeaderBig = styled.h2`
  font-family: ${themes.primary.font.family.goldman};
  border: 2px solid #3a96fb;
  color: #fff;
  border-style: solid none;
  padding: 0 0 5px 0;
  font-size: 2.9em;
  width: fit-content;
  height: fit-content;
`;