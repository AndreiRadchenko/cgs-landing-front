import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.div`
  padding: 0 4.25em;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  overflow: clip;
  overflow-clip-margin: 50px;

  @media ${themes.primary.media.minPCFullHD} {
    margin: auto;
    width: 1785px;
  }
`;
