import styled from "styled-components";
import themes from "../../utils/themes";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* visibility 250ms cubic-bezier(0.4, 0, 0.2, 1); */
`;

export const StyledSpinner = styled.div`
  @keyframes mulShdSpin {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em #ffffff,
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.5),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7),
        1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5),
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff,
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff,
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.5),
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff,
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff,
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.5),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff,
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;
    }
  }

  font-size: 10px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: mulShdSpin 1.1s infinite ease;
  transform: translateZ(0);
`;
