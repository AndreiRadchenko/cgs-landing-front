import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.div`
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 1rem;

  @media ${themes.primary.media.onlyTabletPortrait} {
    font-size: 0.8rem;
  }

  @media ${themes.primary.media.maxMobile} {
    overflow-clip-margin: 0px;
  }
`;
