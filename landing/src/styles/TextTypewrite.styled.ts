import styled from "styled-components";
import themes from "../utils/themes";
import { cursorBlinking } from "./Animations.styled";

export const TypewriteTextWrapper = styled.div``;

export const Cursor = styled.div`
  width: 2px;
  height: 1.45em;
  background-color: ${themes.primary.colors.primary};
  animation: ${cursorBlinking} 1s steps(1) infinite;
  position: absolute;
  bottom: -0.2em;
  right: -0.2em;
`;

export const DisplayedPart = styled.div`
  display: inline;
  position: relative;
`;

export const HiddenPart = styled.div`
  display: inline;
  opacity: 0;
`;

export const LastPart = styled.span`
  display: inline-block;
  position: relative;
`;
