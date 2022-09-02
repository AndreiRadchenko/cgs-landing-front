import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.div`
  font-family: ${themes.primary.font.family.namu};
  background-color: ${themes.primary.colors.blogBackground};
  overflow: clip;
  overflow-clip-margin: 39px;
  font-size: 1rem;
  font-weight: ${themes.primary.font.weight.heavy};
`;

export const Subtitle = styled.h2`
  margin: 0;
  line-height: 140%;
  font-size: 2.5em;
  text-transform: uppercase;
  width: 50%;
  font-weight: inherit;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    width: auto;
  } ;
`;
