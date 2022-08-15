import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.div`
  padding: 0 3.55%;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  background-color: ${themes.primary.colors.portfolioBg};
  overflow: hidden;
  @media ${themes.primary.media.minPC} {
    padding: 0 5%;
  }
  @media ${themes.primary.media.minPCFullHD} {
    padding: 0 7%;
  }
`;

export const Subtitle = styled.h2`
  font-size: ${themes.primary.font.size.aboutUsSubtitle};
  margin: 0;
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;
`;
