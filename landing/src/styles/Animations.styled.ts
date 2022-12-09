import { keyframes, css } from "styled-components";

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

export const cursorBlinking = keyframes`
${css`
  50% {
    background-color: transparent;
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

export const slideDownText = keyframes`
 ${css`
   from {
     opacity: 0;
     transform: translateY(-20px);
   }
   to {
     opacity: 1;
     transform: translateY(0);
   }
 `}
`;

export const slideRight = keyframes`
 ${css`
   from {
     opacity: 0;
     transform: translateX(-60px);
   }
   to {
     opacity: 1;
     transform: translateX(0);
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

export const infiniteBlogText = keyframes`
${css`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
`}`;

export const infiniteText = keyframes` 
${css`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`}
  `;

export const float = (y: number) => keyframes` 
${css`
  from {
    -webkit-transform: rotate(0deg) translate3d(${y}px, 0, 0) rotate(0deg);
  }

  to {
    -webkit-transform: rotate(${y > 2 ? "360deg" : "-360deg"})
      translate3d(${y}px, 0, 0) rotate(${y > 2 ? "-360deg" : "360deg"});
  }
`}
  `;

export const emailShake = keyframes`
${css`
  0% {
    transform: rotate(0);
  }

  10% {
    transform: rotate(20deg);
  }

  20% {
    transform: rotate(-20deg);
  }
  30% {
    transform: rotate(20deg);
  }
  40% {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(20deg);
  }

  60% {
    transform: rotate(-20deg);
  }
  70% {
    transform: rotate(20deg);
  }

  80% {
    transform: rotate(-20deg);
  }
  90% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(0);
  }
`}
`;

export const blur = keyframes`${css`
  0% {
    filter: blur(10px);
  }
  100% {
    filter: blur(0px);
  }
`}`;

export const propeller = keyframes` 
  50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(180deg);
  }
    `;

export const cubeScale = keyframes` 
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
  `;

export const essentialImageShake = keyframes`
${css`
  0% {
    transform: rotate(0);
  }
  2.5% {
    transform: rotate(10deg);
  }
  5% {
    transform: rotate(-10deg);
  }
  7.5% {
    transform: rotate(10deg);
  }

  10% {
    transform: rotate(-10deg);
  }
  12.5% {
    transform: rotate(10deg);
  }
  15% {
    transform: rotate(-10deg);
  }
  17.5% {
    transform: rotate(10deg);
  }
  20% {
    transform: rotate(-10deg);
  }
  22.5% {
    transform: rotate(10deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(-10deg);
  }
`}
`;
