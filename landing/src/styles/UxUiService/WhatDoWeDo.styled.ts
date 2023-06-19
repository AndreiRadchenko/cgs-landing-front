import styled, { css } from "styled-components";
import { ISlide } from "../../types/Decoration.types";
import themes from "../../utils/themes";
import { slideRight } from "../Animations.styled";

export const Container = styled.section`
  margin-top: 14.125em;
  display: flex;
  position: relative;
  @media ${themes.primary.media.maxMobile} {
    display: block;
    margin-top: 5em;
    ::after {
      content: "";
      position: absolute;
      bottom: -60px;
      left: -30px;
      width: 150%;
      height: 1px;
      background-color: #8f8e93;
    }
  }
`;

export const Title = styled.h2`
  font-weight: inherit;
  max-width: 9.2em;
  font-size: 2.5em;
  line-height: 140%;
  text-transform: uppercase;
  margin: 0;

  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.oneAndHalf};
    display: none;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${themes.primary.media.maxMobile} {
    margin: 1em 0 0;
    padding: 0;
    flex-direction: column;
    row-gap: 1.25em;
  }
`;

export const Subtitle = styled.p`
  font-size: ${themes.primary.font.size.linkText};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 120%;
  display: grid;
  grid-template-rows: 1.5fr 1fr;
  margin: 0;
  position: relative;

  @media (max-width: 992px) {
    font-size: 20px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.375em;
  }
`;

export const Text = styled.p`
  font-size: 1em;
  line-height: 160%;
  margin: 0;
  padding: 0;
  height: auto;
  max-width: 19.45em;

  @media (max-width: 992px) {
    font-size: 14px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    max-width: 95vw;
    width: 90vw;
    margin: 0;
  }
`;

export const Svg = styled.img`
  width: 43px;
  height: 43px;
  margin-bottom: 0.714em;

  @media ${themes.primary.media.maxMobile} {
    left: 0;
  }
`;

export const BackgroundContainer = styled.img`
  display: block;
  position: absolute;

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const Wrapper = styled.div<ISlide>`
  width: 17.5em;
  margin-left: 2.5em;
  position: relative;
  display: grid;
  grid-template-rows: 1fr 1fr;

  @media (max-width: 1200px) {
    width: 14em;
  }

  @media (max-width: 992px) {
    width: 9em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 0;
    grid-template-rows: 1fr 0.7fr;
    opacity: 0;
    row-gap: 0;

    &.scrolled {
      animation: ${({ ind }) => css`
        ${slideRight} 1.5s ${ind * 200}ms forwards
      `};
    }
  }
`;
