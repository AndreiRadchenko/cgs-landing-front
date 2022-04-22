import styled, { keyframes, css } from "styled-components";
import {
  rocketAnimationPC,
  rocketAnimationMaxTablet,
  rocketAnimationMinTablet,
  rocketAnimationLaptop,
  rocketAnimationMaxMobile,
} from "../../styles/AnimationsStyled";
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
const spin = keyframes`	
  0% {
    -webkit-transform: rotate(0deg);
    transform:rotate(0deg);
  }
	25% { 
    -webkit-transform: rotate(-90deg);
    transform:rotate(-90deg);
  }
	50% { 
    -webkit-transform: rotate(-180deg);
    transform:rotate(-180deg);
  }
	75% { 
    -webkit-transform: rotate(-270deg);
    transform: rotate(-270deg);
  }
  90% {
    transform: rotate(-270deg) translate3d(20rem, -20rem, 0) ;
  }
	100% { 
    -webkit-transform: rotate(-360deg);
    transform:rotate(-360deg);
  } `;

export const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  min-width: 100%;

  &:hover {
    animation: ${spin} 5s linear;
  }
`;

type ImageProps = { isClicked: boolean };
export const ImageContainer = styled("div")<ImageProps>`
  position: absolute;
  width: 10em;
  height: 13em;
  right: 32%;
  bottom: 2%;
  z-index: 10;
  /* animation: ${rocketAnimationPC} 4s linear; */
  /* ${({ isClicked }) => (isClicked ? css`` : "null")}; */

  /* @media ${themes.primary.media.onlyLaptop} {
    animation: ${({ isClicked }) =>
    isClicked
      ? css`
          ${rocketAnimationLaptop} 4s linear
        `
      : "null"};
  } */

  /* @media ${themes.primary.media.maxTabletLandScape} {
    animation: ${({ isClicked }) =>
    isClicked
      ? css`
          ${rocketAnimationMaxTablet} 4s linear
        `
      : "null"};
  } */
  @media ${themes.primary.media.maxTabletPortrait} {
    /* animation: ${({ isClicked }) =>
      isClicked
        ? css`
            ${rocketAnimationMinTablet} 8s linear
          `
        : "null"}; */
    width: 11em;
    height: 12.2em;
    right: -6em;
    bottom: -4.9em;
  }

  @media ${themes.primary.media.maxMobile} {
    /* animation: ${({ isClicked }) =>
      isClicked
        ? css`
            ${rocketAnimationMaxMobile} 8s linear
          `
        : "null"}; */
    width: 13em;
    height: 14.2em;
    right: -4em;
    bottom: -8.1em;
  }
`;
