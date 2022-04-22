import { keyframes, css } from "styled-components";

export const rotateAnimationLaptopLeft = keyframes`
  ${css`
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(-40deg);
    }
    100% {
      transform: rotate(0deg);
    }
  `}
`;

export const rotateAnimationTabletLeft = keyframes`
  ${css`
    0% {
      transform: scale(0.65) rotate(65deg);
    }
    20% {
      transform: scale(0.65) rotate(105deg);
    }
    100% {
      transform: scale(0.65) rotate(65deg);
    }
  `}
`;

export const rotateAnimationTablerPortraitLeft = keyframes`
  ${css`
    0% {
      transform: scale(0.65) rotate(65deg);
    }
    20% {
      transform: scale(0.65) rotate(80deg);
    }
    100% {
      transform: scale(0.65) rotate(65deg);
    }
  `}
`;

export const rotateAnimationLaptopRight = keyframes`
  ${css`
    0% {
      transform: scale(0.8) rotate(65deg);
    }
    20% {
      transform: scale(0.8) rotate(-40deg);
    }
    100% {
      transform: scale(0.8) rotate(65deg);
    }
  `}
`;

export const rotateAnimationTabletRight = keyframes`
  ${css`
    0% {
      transform: scale(0.65) rotate(65deg);
    }
    20% {
      transform: scale(0.65) rotate(-40deg);
    }
    100% {
      transform: scale(0.65) rotate(65deg);
    }
  `}
`;

export const rotateAnimationTablerPortraitRight = keyframes`
  ${css`
    0% {
      transform: scale(0.65) rotate(65deg);
    }
    20% {
      transform: scale(0.65) rotate(-40deg);
    }
    100% {
      transform: scale(0.65) rotate(65deg);
    }
  `}
`;

export const floatAnimation = keyframes`
  ${css`
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-10px);
    }
    100% {
      transform: translatey(0px);
    }
  `}
`;

export const glassJarAnimation = keyframes`
  ${css`
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-2px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(2px, 0, 0);
    }
  `}
`;

export const rocketAnimationPC = keyframes`
  ${css`
    0% {
      right: -6.5em;
      bottom: -5.8em;
    }
    10% {
      transform: rotate(-0.05turn);
      right: -20rem;
      bottom: 10rem;
    }
    20% {
      transform: rotate(-0.1turn);
      right: -24rem;
      bottom: 22rem;
    }
    30% {
      transform: scale(0.7) rotate(-0.35turn);
      right: -15rem;
      bottom: 31.5rem;
    }
    40% {
      transform: scale(0.7) rotate(-0.45turn);
      right: 30rem;
      bottom: 30rem;
    }
    50% {
      transform: rotate(-0.6turn);
      right: 37rem;
      bottom: 10rem;
    }
    60% {
      transform: rotate(-0.6turn);
      right: 37rem;
      bottom: -20rem;
    }
    70% {
      transform: rotate(-0.6turn);
      right: 37rem;
      bottom: -100rem;
    }
    80% {
      transform: rotate(0);
      right: 37rem;
      bottom: -79rem;
    }
    90% {
      transform: rotate(0);
      right: -6.5em;
      bottom: -5.8em;
    }
  `}
`;

export const rocketAnimationLaptop = keyframes`
  ${css`
    0% {
      right: -6.5em;
      bottom: -5.8em;
    }
    10% {
      transform: rotate(-0.1turn);
      /* right: -25rem;
      bottom: 12rem; */
    }
    20% {
      transform: rotate(-0.2turn);
      right: -24rem;
      bottom: 24rem;
    }
    30% {
      transform: scale(0.5) rotate(-0.35turn);
      right: -23rem;
      bottom: 30rem;
    }
    40% {
      transform: scale(0.5) rotate(-0.45turn);
      right: 30rem;
      bottom: 30rem;
    }
    50% {
      transform: rotate(-0.6turn);
      right: 37rem;
      bottom: 10rem;
    }
    60% {
      transform: rotate(-0.6turn);
      right: 37rem;
      bottom: -20rem;
    }
    70% {
      transform: rotate(-0.6turn);
      right: 37rem;
      bottom: -100rem;
    }
    80% {
      transform: rotate(0);
      right: 37rem;
      bottom: -79rem;
    }
    90% {
      transform: rotate(0);
      right: -6.5em;
      bottom: -5.8em;
    }
  `}
`;

export const rocketAnimationMaxTablet = keyframes`
  ${css`
    0% {
      right: -6.5rem;
      bottom: -5.8rem;
    }
    10% {
      transform: rotate(-0.1turn);
      right: -25rem;
      bottom: 12rem;
    }
    20% {
      transform: rotate(-0.1turn);
      right: -24rem;
      bottom: 24rem;
    }
    30% {
      transform: scale(0.5) rotate(-0.35turn);
      right: -23rem;
      bottom: 29rem;
    }
    40% {
      transform: scale(0.5) rotate(-0.45turn);
      right: 23rem;
      bottom: 29rem;
    }
    50% {
      transform: rotate(-0.6turn);
      right: 23rem;
      bottom: 10rem;
    }
    60% {
      transform: rotate(-0.6turn);
      right: 23rem;
      bottom: -20rem;
    }
    70% {
      transform: rotate(-0.6turn);
      right: 23rem;
      bottom: -100rem;
    }
    80% {
      transform: rotate(0);
      right: 23rem;
      bottom: -79rem;
    }
    90% {
      transform: rotate(0);
      right: -6.5em;
      bottom: -5.8em;
    }
  `}
`;

export const rocketAnimationMinTablet = keyframes`
  ${css`
    0% {
      right: -6.5rem;
      bottom: -5.8rem;
    }
    10% {
      transform: rotate(-0.1turn);
      right: -20rem;
      bottom: 12rem;
    }
    20% {
      transform: rotate(-0.1turn);
      right: -22rem;
      bottom: 24rem;
    }
    30% {
      transform: scale(0.5) rotate(-0.35turn);
      right: -22rem;
      bottom: 32rem;
    }
    40% {
      transform: scale(0.5) rotate(-0.45turn);
      right: 22rem;
      bottom: 32rem;
    }
    50% {
      transform: rotate(-0.6turn);
      right: 22rem;
      bottom: 10rem;
    }
    60% {
      transform: rotate(-0.6turn);
      right: 23rem;
      bottom: -20rem;
    }
    70% {
      transform: rotate(-0.6turn);
      right: 23rem;
      bottom: -100rem;
    }
    80% {
      transform: rotate(0);
      right: 23rem;
      bottom: -79rem;
    }
    90% {
      transform: rotate(0);
      right: -6.5em;
      bottom: -5.8em;
    }
  `}
`;

export const rocketAnimationMaxMobile = keyframes`
  ${css`
    0% {
      right: -6.5rem;
      bottom: -5.8rem;
    }
    10% {
      transform: rotate(-0.1turn);
      right: -10rem;
      bottom: 12rem;
    }
    20% {
      transform: rotate(-0.1turn);
      right: -10rem;
      bottom: 24rem;
    }
    30% {
      transform: scale(0.5) rotate(-0.35turn);
      right: -10rem;
      bottom: 25rem;
    }
    40% {
      transform: scale(0.5) rotate(-0.45turn);
      right: 10rem;
      bottom: 25rem;
    }
    50% {
      transform: rotate(-0.6turn);
      right: 10rem;
      bottom: 10rem;
    }
    60% {
      transform: rotate(-0.6turn);
      right: 10rem;
      bottom: -20rem;
    }
    70% {
      transform: rotate(-0.6turn);
      right: 10rem;
      bottom: -100rem;
    }
    80% {
      transform: rotate(0);
      right: 10rem;
      bottom: -79rem;
    }
    90% {
      transform: rotate(0);
      right: -6.5em;
      bottom: -5.8em;
    }
  `}
`;
