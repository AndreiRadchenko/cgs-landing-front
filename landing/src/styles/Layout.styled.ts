import styled from "styled-components";
import themes from "../utils/themes";

export const Layout = styled.article`
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding-inline: 4.25em;
  overflow: hidden;
  font-family: ${themes.primary.font.family.namu};

  @media ${themes.primary.media.minPCFullHD} {
    width: 1800px;
  }

  @media ${themes.primary.media.minPC} {
    width: 1500px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 972px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 748px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-inline: 1.925em;
    width: 100%;
    padding: 0 1.925em;
  }
`;
