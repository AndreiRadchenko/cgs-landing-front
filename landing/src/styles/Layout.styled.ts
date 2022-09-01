import styled from "styled-components";
import themes from "../utils/themes";

export const Layout = styled.article`
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding-inline: 4.25em;
  font-family: ${themes.primary.font.family.namu};

  @media ${themes.primary.media.minPCFullHD} {
    width: 1800px;
  }
  @media ${themes.primary.media.minPC} {
    width: 1500px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 1000px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 768px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
  }
`;
