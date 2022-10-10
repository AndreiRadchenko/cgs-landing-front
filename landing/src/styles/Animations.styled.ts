﻿import { keyframes, css } from "styled-components";
import themes from "../utils/themes";

export const rotateAnimationLaptopLeft = keyframes`
  ${css`
    0% {
      transform: scale(0.9) rotate(0deg);
    }
    20% {
      transform: scale(0.9) rotate(-40deg);
    }
    100% {
      transform: scale(0.9) rotate(0deg);
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

export const rotateAnimationTabletPortraitLeft = keyframes`
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
export const rotateAnimationMobileLeft = keyframes`
  ${css`
    0% {
      transform: scale(0.5) rotate(65deg);
    }
    20% {
      transform: scale(0.5) rotate(80deg);
    }
    100% {
      transform: scale(0.5) rotate(65deg);
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

export const spin = keyframes`	
  ${css`
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    25% {
      -webkit-transform: rotate(-90deg);
      transform: rotate(-90deg);
    }
    50% {
      -webkit-transform: rotate(-180deg);
      transform: rotate(-180deg);
    }
    75% {
      -webkit-transform: rotate(-270deg);
      transform: rotate(-270deg);
    }
    90% {
      transform: rotate(-270deg) translate3d(50%, -50%, 0);
    }
    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  `} `;

export const scale = keyframes`
  ${css`
    30% {
      transform: scale(0.5);
    }
    40% {
      transform: scale(0.5);
    }
  `}
`;

export const infiniteText = keyframes`
from {
  transform: translateX(-100%);
}
to {
  transform: translateX(100%);
}
`;

export const aboutUsPageInfiniteText = keyframes`
from {
  transform: translateX(-100%);
}
to {
  transform: translateX(0);
}
`;

export const cursorBlinking = keyframes`
${css`
  0% {
    background-color: ${themes.primary.colors.primary};
  }
  50% {
    background-color: ${themes.primary.colors.blogBackground};
  }
  100% {
    background-color: ${themes.primary.colors.primary};
  }
`}
`;

export const slideUp = keyframes`
 ${css`
   from {
     opacity: 1;
     transform: translateY(0);
   }
   to {
     opacity: 0;
     transform: translateY(-30px);
   }
 `}
`;

export const slideDown = keyframes`
 ${css`
   from {
     opacity: 0;
     transform: translateY(-60px);
   }
   to {
     opacity: 1;
     transform: translateY(0);
   }
 `}
`;

export const buttonHover = keyframes`
${css`
  from {
    background-position-y: 0;
  }
  to {
    background-position-y: -600px;
  }
`}
`;
