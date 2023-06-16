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
  margin: 0;
  line-height: 140%;
  font-size: 2.5em;
  text-transform: uppercase;
  font-weight: inherit;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    width: auto;
    display: none;
  }
`;

export const BonusesAlign = styled.div`
  @media ${themes.primary.media.maxPCFullHD} {
    margin-top: -8em;
    margin-bottom: -2em;
  }
  @media (max-width: 1050px) {
    margin-top: -6em;
  }
  @media ${themes.primary.media.maxMobile} {
    margin-top: -55px;
    margin-bottom: -10px;
  }
`;
