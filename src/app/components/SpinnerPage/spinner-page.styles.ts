import styled, { createGlobalStyle } from "styled-components";

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
  font-size: 6px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: linear-gradient(to right, #333 10%, rgba(0, 3, 51, 0) 42%);
  position: relative;
  animation: spin 1.4s infinite linear;
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: #0f0f0f;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }

  &:after {
    background: #ffffff;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
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