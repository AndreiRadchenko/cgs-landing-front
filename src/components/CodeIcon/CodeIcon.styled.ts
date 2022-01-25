import styled, { css } from "styled-components";
import themes from "../../utils/themes";

export interface ICodeIcon {
  color: string;
}

export const CodeIconContent = styled.span.attrs((props: ICodeIcon) => ({
  color: props.color,
}))`
  font-weight: ${themes.primary.font.weight.bold};
  font-family: ${themes.primary.font.family.sourceCode};
  font-size: 1.8em;
  display: block;
  position: absolute;
  z-index: 2;

  ${({ color }: ICodeIcon) => css`
    color: ${color};
  `}
`;
