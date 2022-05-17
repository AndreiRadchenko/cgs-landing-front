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
    transform: translateX(135px) rotate(180deg);
  }
  75% {
    transform: translateX(0px) rotate(180deg);
  }
  100% {
    transform: translateX(0px) rotate(359deg);
  }
`}
`;
