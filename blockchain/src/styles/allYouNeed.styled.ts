import styled from "styled-components";
import themes from "../utils/themes";

export const GreenSubheader = styled.h3`
  font-family: ${themes.primary.font.family.goldman};
  color: ${themes.primary.colors.allGreen};
  font-size: ${themes.primary.font.size.greenSubheader};
`;

export const TechnologiesGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  @media ${themes.primary.media.maxMobile} {
    grid-template-columns: none;
    grid-column: 1 / 3;
  }
`;

export const HalfGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0;
  padding: 0;
`;

export const GreenLineBlock = styled.div`
  border-left: 1px solid ${themes.primary.colors.allGreen};
  display: flex;
  flex-direction: column;
  margin: ${themes.primary.spacing.oneSix} 0;
`;

export const TechList = styled.ul`
  position: relative;
  padding: 0 0 0 1em;
  font-family: ${themes.primary.font.family.sourceCode};
  font-size: ${themes.primary.font.size.linkText};
  margin: -0.7em 0 0 0;
  list-style: none;
  color: ${themes.primary.colors.textColor};

  @media ${themes.primary.media.minLaptop} {
    font-size: ${themes.primary.font.size.greenSubheader};
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: ${themes.primary.font.size.mobileGreenSubheader};
  }
`;

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: 3.3fr 2fr 3.1fr;
  gap: 1.2em;
`;
