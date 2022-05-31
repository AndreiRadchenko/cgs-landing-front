import { keyframes, css } from "styled-components";

export const spin = keyframes`
${css`
  0% {
    transform: translate(0) rotate(0);
  }
  25% {
    transform: translateX(135px);
  }
  50% {
    transform: translateX(135px) rotate(179deg);
  }
  75% {
    transform: translateX(0px) rotate(179deg);
  }
  100% {
    transform: translateX(0px) rotate(359deg);
  }
`}
`;

export const spinMobile = keyframes`
${css`
  0% {
    transform: translate(0) rotate(0);
  }
  25% {
    transform: translateX(135px);
  }
  50% {
    transform: translateX(135px) rotate(179deg);
  }
  75% {
    transform: translateX(0px) rotate(179deg);
  }
  100% {
    transform: translateX(0px) rotate(359deg);
  }
`}
`;

export const blockRightAnimation = keyframes`
${css`
  0% {
    transform: translateX(-50px);
  }
  100% {
    transform: translateX(0);
  }
`}
`;

export const blockLeftAnimation = keyframes`
${css`
  0% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(0);
  }
`}
`;

export const floatAnimation = keyframes`
  ${css`
    0% {
      top: 0px;
    }
    50% {
      top: 20px;
    }
    100% {
      top: 0px;
    }
  `}
`;

export const ufoFloatAnimation = keyframes`
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
