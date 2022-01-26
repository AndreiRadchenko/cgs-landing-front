import styled, { css } from "styled-components";
import { IStyledButtonProps } from "../../types/Button.types";
import themes from "../../utils/themes";

export const StyledButton = styled.button.attrs(
  (props: IStyledButtonProps) => ({
    width: props.width,
    height: props.height,
    src: props.src,
    marginTop: props.topSpacing,
    letterSpacing: props.letterSpacing,
  })
)`
  position: relative;
  cursor: pointer;

  ${(props) => css`
    display: block;
    overflow: hidden;
    width: ${props.width};
    height: ${props.height};
    margin-top: ${props.marginTop};

    z-index: 25;
    outline: none;
    border: none;
    background-color: transparent;
    letter-spacing: ${props.letterSpacing};
  `}

  @media ${themes.primary.media.onlyTabletLandScape} {
    width: 17em;
    height: 8em;
    margin-top: ${themes.primary.spacing.headerNavVertical};
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    width: 17em;
    height: 8em;
    margin-top: ${themes.primary.spacing.headerNavVertical};
  }

  @media ${themes.primary.media.maxMobile} {
    width: 15em;
    height: 7em;
    margin-top: ${themes.primary.spacing.primary};
  }
`;
