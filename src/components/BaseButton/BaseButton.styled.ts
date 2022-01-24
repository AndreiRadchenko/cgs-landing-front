import styled, { css } from "styled-components";
import { IStyledButtonProps } from "../../types/Button.types";
import { IDecorationTextProps } from "../../types/Decoration.types";

export const StyledButton = styled.button.attrs(
  (props: IStyledButtonProps) => ({
    width: props.width,
    height: props.height,
    marginTop: props.topSpacing,
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
    outline: none;
    border: none;
    background-color: transparent;
    letter-spacing: ${props.letterSpacing};
  `}
`;
