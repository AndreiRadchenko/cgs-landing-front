import styled, { css } from "styled-components";
import themes from "../../utils/themes";
import { slideRight } from "../Animations.styled";

export const Container = styled.div`
  width: 98.5%;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 6.25em;

    h2 {
      line-height: 233%;
    }
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 4.25em;
  display: flex;
  flex-wrap: wrap;
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
`;

export const TextBlock = styled.div<{ ind: number }>`
  display: flex;
  align-items: flex-end;
  justify-content: center;
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
    }
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
    position: absolute;
    left: -0.1em;
    font-size: 3.75em;
    width: 1em;
    margin: 0;
    text-align: center;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    position: absolute;
    left: -0.1em;
    font-size: 3.75em;
    width: 1em;
    margin: 0;
    text-align: center;
  }
`;

export const TextContent = styled.div`
  font-size: 1.375em;
  line-height: 160%;
  margin-bottom: 0.25em;

  @media ${themes.primary.media.minPC} {
    font-size: 1.5em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.1em;
  }
  @media ${themes.primary.media.maxServiceWeb} {
    font-size: 1.5em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.125em;
    padding-left: 3.2em;
    margin-top: 0.5em;
    margin-right: auto;
  }
`;
