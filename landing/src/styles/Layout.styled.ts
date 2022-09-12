import styled from "styled-components";
import themes from "../utils/themes";

export const Layout = styled.article`
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding-inline: 4.25em;
  overflow: clip;
  font-family: ${themes.primary.font.family.namu};

  &.hidden {
    overflow: hidden;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 0 1.925em;
  }
`;
