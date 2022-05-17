import styled, { css } from "styled-components";
import themes from "../utils/themes";

interface IButtonTextStyledProps {
  fontSize?: string;
}

export const Page = styled.article`
  width: 1400px;
  margin: ${themes.primary.spacing.headerNavVertical} auto;

  @media ${themes.primary.media.onlyLaptop} {
    width: 1100px;

    &.test {
      width: 90%;
    }
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    width: 840px;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    margin: ${themes.primary.spacing.headerNavVertical} auto;
    width: 720px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    margin: 0;
    padding: ${themes.primary.spacing.headerNavVertical}
      ${themes.primary.spacing.headerNavHorizontal};
    overflow: hidden;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 2em 2em;
  }
`;
