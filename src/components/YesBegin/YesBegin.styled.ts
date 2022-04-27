import styled, { css } from "styled-components";
import { spin, scale } from "../../styles/AnimationsStyled";
import themes from "../../utils/themes";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.secondary};
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 25%;
  position: relative;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 4em;
  text-align: center;
  margin: 0;
  max-width: 14em;
  z-index: 1000;

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 4em;
    max-width: 10em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 3.1em;
  }
`;

export const SubTitle = styled.h4`
  font-size: 2em;
  font-weight: 400;
  text-align: center;
  font-weight: ${themes.primary.font.weight.light};

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 2.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 2.2em;
    max-width: 14em;
  }
`;

export const ButtonContainer = styled.div`
  position: relative;
  font-family: ${themes.primary.font.family.sourceCode};
`;

type ImageProps = { isClicked: boolean };

export const Circle = styled("div")<ImageProps>`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100%;
  animation: ${({ isClicked }) =>
    isClicked
      ? css`
          ${spin} 6s linear
        `
      : "null"};
`;

export const ImageContainer = styled("div")<ImageProps>`
  position: absolute;
  width: 10em;
  height: 13em;
  right: 32%;
  bottom: 2%;
  z-index: 10;
  animation: ${({ isClicked }) =>
    isClicked
      ? css`
          ${scale} 6s linear
        `
      : "null"};

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 11em;
    height: 12.2em;
    right: 12rem;
    bottom: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 13em;
    height: 14.2em;
    right: 8rem;
    bottom: 7rem;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 13em;
    height: 14.2em;
    right: 4rem;
    bottom: 7rem;
  }
`;
