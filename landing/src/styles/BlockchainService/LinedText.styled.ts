import styled, { css } from "styled-components";
import themes from "../../utils/themes";
import { slideRight } from "../Animations.styled";

interface IContainer {
  position: string;
  height: number;
  ind: number;
}

export const Container = styled.div<IContainer>`
  display: flex;
  column-gap: 20px;
  height: ${({ height }) => `${height}px`};
  align-items: ${({ position }) =>
    position === "top" ? "flex-start" : "flex-end"};
  border-left: 1px solid ${themes.primary.colors.black};
  z-index: 5;

  @media ${themes.primary.media.maxMobile} {
    opacity: 0;
    &.scrolled {
      animation: ${({ ind }) => css`
        ${slideRight} 1.5s ${ind * 200}ms forwards
      `};
    }
  }
`;

export const Marker = styled.div<{ position: string }>`
  width: 12px;
  height: 12px;
  background: ${themes.primary.colors.bigDigit};
  border: 1px solid ${themes.primary.colors.black};
  border-radius: 50%;
  box-shadow: 7px 2px 0px ${themes.primary.colors.black};
  margin-left: -7px;
  transform: translateY(
    ${({ position }) => (position === "top" ? "-90%" : "90%")}
  );
`;

export const Text = styled.p<{ position: string }>`
  margin: 0;
  transform: translateY(
    ${({ position }) => (position === "top" ? "-65%" : "65%")}
  );
`;
