import styled, { css } from "styled-components";
import themes from "../utils/themes";

interface IButtonTextStyledProps {
  fontSize?: string;
}

export const Page = styled.article`
  width: 1400px;
  position: relative;
  margin: ${themes.primary.spacing.headerNavVertical} auto;

  @media ${themes.primary.media.onlyLaptop} {
    width: 1100px;
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
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 2em 2em;
    overflow: hidden;
  }
`;

export const ButtonText = styled.span.attrs(
  ({ fontSize }: IButtonTextStyledProps) => ({
    fontSize: fontSize,
  })
)`
  position: relative;
  z-index: 3;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-weight: 500;
  font-family: ${themes.primary.font.family.roboto};
  cursor: pointer;

  ${(props) => css`
    font-size: ${props.fontSize};
  `}

  @media ${themes.primary.media.maxMobile} {
    font-weight: 700;
    font-size: 1.1em;
  }
`;
