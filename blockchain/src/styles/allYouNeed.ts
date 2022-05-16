import styled from "styled-components";
import themes from "../utils/themes";

export const GreenSubheader = styled.h3`
  font-family: ${themes.primary.font.family.goldman};
  color: #90e745;
  font-size: 1.6em;
`;

export const TechnologiesGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const HalfGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0;
  padding: 0;
`;

export const GreenLineBlock = styled.div`
  border-left: 1px solid #90e745;
  display: flex;
  flex-direction: column;
  margin: 1.6em 0;
`;

export const TechList = styled.ul`
  position: relative;
  padding: 0 0 0 1em;
  font-family: ${themes.primary.font.family.sourceCode};
  font-size: 1.6em;
  margin: -0.7em 0 0 0;
  list-style: none;
  color: #fff;
`;

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: 3.3fr 2fr 3.1fr;
  gap: 1.2em;
`