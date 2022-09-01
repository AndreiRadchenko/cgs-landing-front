import styled, { css } from "styled-components";
import themes from "../utils/themes";
import { slideDown, slideUp } from "./Animations.styled";

export const DropDownWrapper = styled.div`
  padding: 1.125rem 1.25rem;

  & > div:hover {
    color: ${themes.primary.colors.darkBlue};

    & svg {
      fill: ${themes.primary.colors.darkBlue};
    }
  }

  & > div:active {
    color: ${themes.primary.colors.darkBlue};

    & svg {
      fill: ${themes.primary.colors.darkBlue};
    }
  }
`;

export const DropDownHeader = styled.div`
  display: flex;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 1.125rem;
  transition: all 0.2s;
`;

export const DropDownContent = styled.div`
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  margin: 0;
  padding: 0;
  transition: 0.45s ease-in;

  &.open {
    max-height: 400px;
    opacity: 1;
  }
`;

export const ContentTextWrapper = styled.div<{ ind: number }>`
  margin-top: 1.375rem;
  font-size: 0.875rem;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  animation: ${({ ind }) =>
    css`
      ${slideUp} 300ms ${ind * 60}ms ease-in forwards
    `};
  transition: all 0.3s;

  &.open {
    transform-origin: top center;
    animation: ${({ ind }) =>
      css`
        ${slideDown} 300ms ${ind * 60}ms ease-in forwards
      `};
  }

  &:last-of-type {
    margin-bottom: 1.375rem;
  }

  &:hover {
    color: ${themes.primary.colors.darkBlue};
  }
`;

export const LinkItem = styled.a``;

export const ArrowImage = styled.svg`
  width: 9px;
  height: 5px;
  margin-top: 0.6rem;
  margin-left: 0.75rem;

  transition: 0.3s;

  &.open {
    transform: rotate(-180deg);
  }
`;
