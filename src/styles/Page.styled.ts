import styled, { css } from "styled-components";
import themes from "../utils/themes";

interface IButtonTextStyledProps {
  fontSize?: string;
}

export const Page = styled.article`
  width: 1400px;
  position: relative;
  margin: ${themes.primary.spacing.headerNavVertical} auto;
`;

export const ButtonText = styled.span.attrs(
  ({ fontSize }: IButtonTextStyledProps) => ({
    fontSize: fontSize,
  })
)`
  position: relative;
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
`;
