import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.div`
  font-weight: ${themes.primary.font.weight.heavy};
  overflow-clip-margin: 51px;
  font-size: 1rem;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.4rem;
  }

  @media (min-width: 2200px) {
    font-size: 1.6rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 2.5em;
  margin: 0;
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 233%;
  }
`;
