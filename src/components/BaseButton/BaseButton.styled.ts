import styled, { css } from "styled-components";
import { IStyledButtonProps } from "../../types/Button.types";

export const StyledButton = styled.button.attrs(
  (props: IStyledButtonProps) => ({
    type: props.type,
    width: props.width,
    height: props.height,
    marginTop: props.marginTop,
    letterSpacing: props.letterSpacing,
  })
)`
  position: relative;

  cursor: pointer;
  ${(props) => css`
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
`;
