import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

export const GlobalSpinnerStyle = createGlobalStyle`
  body {
    display: block;
    overflow: hidden;
  }

  #__next {
    overflow: hidden;
  }
`;

export const SpinnerContainer = styled("div")`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const AnimationSpinner = styled("div")`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #113;
    border-color: #113 transparent #113 transparent;
    animation: spin 1.2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;