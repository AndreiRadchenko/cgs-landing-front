import styled from "styled-components";
import { IDecorationTextProps } from "../../types/Decoration.types";

export const Decoration = styled.svg.attrs((props) => ({
  height: props.height,
  width: props.width,
  viewBox: "0 0 187 25",
  fill: props.color,
  preserveAspectRatio: "none",
  xmlns: "http://www.w3.org/2000/svg",
}))<IDecorationTextProps>`
  display: inline-block;
`;
