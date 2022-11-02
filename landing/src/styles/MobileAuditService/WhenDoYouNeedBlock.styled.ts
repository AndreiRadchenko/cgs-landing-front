import styled, { css } from "styled-components";
import { ISlide } from "../../types/Decoration.types";
import themes from "../../utils/themes";
import { slideRight } from "../Animations.styled";

export const Container = styled.div`
  margin-top: 11.94em;
  @media ${themes.primary.media.maxMobile} {
    margin-top: 4em;
  }
`;

export const Title = styled.h2`
  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    line-height: 132%;
  }
  margin: 0;
  font-size: 2.5em;
  font-weight: inherit;
  line-height: 140%;
  text-transform: uppercase;
`;

export const Description = styled.h4`
  margin-top: 0.9em;
  font-size: 1.375em;
  font-weight: inherit;
  line-height: 140%;

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.9em;
    line-height: 132%;
    margin-top: 1em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.25em;
    line-height: 132%;
    margin-top: 1em;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 4.25em;
  margin-bottom: 3em;
  display: flex;
  justify-content: space-between;
  row-gap: 3em;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 0.6em;
    row-gap: 1em;
    flex-direction: column;

    br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-bottom: 0;
  }
`;

export const TextBlock = styled.div<ISlide>`
  display: flex;
  align-items: flex-end;
  flex-basis: 30%;
  opacity: 0;

  &.scrolled {
    animation: ${({ ind }) => css`
      ${slideRight} 1.5s ${ind * 200}ms forwards
    `};
  }

  &:nth-child(4) {
    justify-content: flex-end;
    flex-basis: 43%;
  }

  &:nth-child(5) {
    justify-content: flex-start;
    flex-basis: 45%;
  }

  @media ${themes.primary.media.maxServiceWeb} {
    align-items: flex-start;

    br {
      display: none;
    }

    &:nth-child(5),
    &:nth-child(4) {
      br {
        display: block;
      }
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-basis: 100%;
    position: relative;

    &:nth-child(4),
    &:nth-child(5) {
      flex-basis: 100%;
      align-items: flex-start;
      margin-bottom: auto;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    align-items: center;
  }
`;

export const BigDigit = styled.div`
  font-size: 5em;
  color: ${themes.primary.colors.bigDigit};
  -webkit-text-stroke: 1.6px ${themes.primary.colors.primary};
  text-shadow: 7px 2px 0px ${themes.primary.colors.primary};
  margin-right: 22px;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 4.4em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    left: -0.1em;
    font-size: 3.75em;
    width: 1em;
    margin: 0;
    margin-right: 10px;
    text-align: center;
  }
`;

export const TextContent = styled.div`
  font-size: 1.375em;
  line-height: 160%;
  margin-bottom: 5px;

  &.one {
    margin: auto 0;
  }

  @media ${themes.primary.media.minPC} {
    font-size: 1.5em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.3em;
  }
  @media ${themes.primary.media.maxServiceWeb} {
    font-size: 1.5em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.2em;
    margin: auto 0;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 1.125em;
    line-height: 24px;
    max-width: 65%;

    &:not(.one) {
      margin-top: 16px;
    }
  }
`;
