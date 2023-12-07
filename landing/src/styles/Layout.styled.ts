import styled from "styled-components";
import themes from "../utils/themes";

export const Layout = styled.article`
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding-inline: 4.25em;
  overflow: hidden;
  font-family: ${themes.primary.font.family.namu};

  @media (min-width: 2560px) {
    max-width: 2560px;
    margin: 0 auto;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 0 40px;
  }

  @media ${themes.primary.media.minTablet} {
    padding: 0 20px;
  }
`;

export const PageArticle = styled.article``;
