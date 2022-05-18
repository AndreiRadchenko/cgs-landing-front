import styled from "styled-components";
import themes from "../utils/themes";

export const TitlePlusContentBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.9fr;
  gap: 1em;
  margin-top: 10em;
`;

export const DefaultGrid = styled.div`
  display: grid;
  margin: 0;
  padding: 0;
`;

export const HeaderBig = styled.h2`
  font-family: ${themes.primary.font.family.goldman};
  border: 2px solid ${themes.primary.colors.headerBorder};
  color: ${themes.primary.colors.textColor};
  border-style: solid none;
  padding: 0 0 5px 0;
  font-size: ${themes.primary.font.size.bigHeaderTablet};
  width: fit-content;
  height: fit-content;
  margin: 0.6em 0 2em 0;

  @media ${themes.primary.media.minLaptop}{
    font-size: ${themes.primary.font.size.bigHeader};
  }
`;

export const Dot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${themes.primary.colors.allGreen};
  left: -4px;
  margin-top: 0.5em;
`;