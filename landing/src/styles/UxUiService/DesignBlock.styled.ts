import styled, { css } from "styled-components";
import themes from "../../utils/themes";
import { slideRight } from "../Animations.styled";

export const Container = styled.section`
  margin-block: 12em 9.625em;
  padding-bottom: 20px;
  position: relative;

  &.withoutShowcase {
    margin-bottom: 12.5em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-bottom: 40px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    padding-bottom: 50px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-bottom: 0;
    margin-top: 7.5em;
    margin-bottom: 6.5em;

    &.withoutShowcase {
      padding-bottom: 3.75em;
    }
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: inherit;
  font-size: ${themes.primary.font.size.reviewTitle};
  line-height: 140%;
  text-transform: uppercase;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
  }
`;

export const BlockWrapper = styled.div`
  margin-top: 3.56em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 2em;
    display: flex;
  }

  & p {
    font-size: ${themes.primary.font.size.oneAndHalf};
    line-height: 160%;

    @media ${themes.primary.media.maxMobile} {
      font-size: 1.125em;
    }
  }
`;

export const TopSteps = styled.div`
  display: grid;
  grid-template-columns: 5.37fr 5.71fr 1fr;
  margin-left: 5px;

  @media ${themes.primary.media.maxMobile} {
    grid-template-columns: 1fr;
    width: 15em;

    & > div {
      height: 5.625em;
      margin-bottom: 2.875em;

      &:nth-child(2) {
        margin-top: 0.56em;
        height: 2.625em;
        margin-left: 5.25em;
      }

      &:last-child {
        height: 2.625em;
        margin-top: 3.5em;
        margin-left: 12.125em;
      }
    }
  }
`;

export const BottomSteps = styled.div`
  display: grid;
  grid-template-columns: 1.46fr 1fr;
  margin-left: 18.125em;

  @media ${themes.primary.media.maxMobile} {
    grid-template-columns: 1fr;
    margin-left: -3em;
    margin-top: 3em;

    & > div {
      align-items: flex-start;
      height: 2.625em;
      width: 9em;

      &:first-child {
        margin-bottom: 8.5em;
      }

      &:last-child {
        height: 5.625em;
        margin-left: -12em;
        margin-top: -2em;
      }

      & > div {
        transform: translateY(-90%);
      }
      & > p {
        transform: translateY(-65%);
      }
    }
  }
`;

interface IMobileLine {
  grad1: string;
  grad2: string;
  angle: string;
  ind: number;
}

export const StyledLine = styled.div<IMobileLine>`
  width: 102vw;
  height: 1.5em;
  position: absolute;
  top: 42.5%;
  left: -5%;
  background: ${({ angle }) =>
    css`radial-gradient(
      50% 80px at ${angle},
      ${themes.primary.colors.mainGradientColor2} ,
      ${themes.primary.colors.mainGradientColor1}
    );`};
  border: 1px solid ${themes.primary.colors.primary};
  box-shadow: 7px 2px 0px ${themes.primary.colors.primary};

  @media ${themes.primary.media.maxMobile} {
    top: 0;
    left: -10%;
    width: 120%;
    background: linear-gradient(
      ${({ grad1, grad2 }) => css`90deg,
    ${grad1} 13.67%,
    ${grad2} 90.39%`}
    );
    opacity: 0;

    &.scrolled {
      animation: ${({ ind }) => css`
        ${slideRight} 1.5s ${ind * 200}ms forwards
      `};
    }

    &:first-child {
      top: 4.8em;
    }

    &:nth-child(2) {
      top: 10.9em;
    }
    &:nth-child(3) {
      top: 19.9em;
    }
  }
`;
