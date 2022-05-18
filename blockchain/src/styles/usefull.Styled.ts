import styled, { css } from "styled-components";
import themes from "../utils/themes";
import { blockLeftAnimation, blockRightAnimation } from "./animations";

export const TitlePlusContentBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.9fr;
  gap: 1em;
  margin-top: 10em;
`;

export const DefaultGrid = styled.div`
  display: grid;
  margin: 0;
  padding: 0;
`;

export const HeaderBig = styled.h2`
  font-family: ${themes.primary.font.family.goldman};
  border: 2px solid ${themes.primary.colors.headerBorder};
  color: ${themes.primary.colors.textColor};
  border-style: solid none;
  padding: 0 0 5px 0;
  font-size: ${themes.primary.font.size.bigHeader};
  width: fit-content;
  height: fit-content;
  margin: 0.6em 0 2em 0;
`;

export const Dot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${themes.primary.colors.allGreen};
  left: -4px;
  margin-top: 0.5em;
`;
interface IImageWrapper {
  isScrolled?: boolean;
}

export const ImageWrapper = styled("span")<IImageWrapper>`
  transition: opacity 1s;
  &.first {
    opacity: ${({ isScrolled }) => (isScrolled ? 1 : 0)};
    animation: ${({ isScrolled }) =>
      isScrolled
        ? css`
            ${blockRightAnimation} 2s linear
          `
        : "null"};
  }
  &.last {
    opacity: ${({ isScrolled }) => (isScrolled ? 1 : 0)};
    animation: ${({ isScrolled }) =>
      isScrolled
        ? css`
            ${blockLeftAnimation} 2s linear
          `
        : "null"};
  }
`;
