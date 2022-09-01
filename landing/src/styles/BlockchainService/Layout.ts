import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.div`
  padding: 0 4.25em;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 1rem;

  overflow: clip;
  overflow-clip-margin: 60px;

  @media ${themes.primary.media.minPCFullHD} {
    margin: auto;
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
    padding: 0 1.25em;
    overflow-clip-margin: 0px;
  }
`;
