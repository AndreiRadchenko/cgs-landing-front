import { useState, useEffect } from "react";

import styled, { createGlobalStyle } from "styled-components";

import { HomePage } from "../src/app/containers/HomePage/";
import { getData } from "../src/services/api/api";

const categories = [
  "slogan",
  "projects",
  "workers",
  "facts",
  "technologies",
  "testimonials",
  "featuredTechnologies",
];

export const getServerSideProps = async () => {
  try {
    const props: Record<string, any> = {};

    const responses = await Promise.all(categories.map((name) => getData(name)));

    categories.forEach((category, index) => {
      props[category] = responses[index];
    });

    return { props };
  } catch (error) {
    console.log("error", { error });
    return null;
  }
};

const GlobalSpinnerStyle = createGlobalStyle`
  body {
    display: block;
    overflow: hidden;
  }

  #__next {
    overflow: hidden;
  }
`;

const SpinnerContainer = styled("div")`
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

const AnimationSpinner = styled("div")`
  animation: spin 1s infinite linear;
  border: solid 2vmin transparent;
  border-radius: 50%;
  border-right-color: #09f;
  border-top-color: #09f;
  box-sizing: border-box;
  height: 20vmin;
  left: calc(50% - 10vmin);
  position: fixed;
  top: calc(50% - 10vmin);
  width: 20vmin;
  z-index: 1;

  &:before {
    animation: spin 2s infinite linear;
    border: solid 2vmin transparent;
    border-radius: 50%;
    border-right-color: #3cf;
    border-top-color: #3cf;
    box-sizing: border-box;
    content: "";
    height: 16vmin;
    left: 0;
    position: absolute;
    top: 0;
    width: 16vmin;
  }

  &:after {
    animation: spin 3s infinite linear;
    border: solid 2vmin transparent;
    border-radius: 50%;
    border-right-color: #6ff;
    border-top-color: #6ff;
    box-sizing: border-box;
    content: "";
    height: 12vmin;
    left: 2vmin;
    position: absolute;
    top: 2vmin;
    width: 12vmin;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <AnimationSpinner />
    </SpinnerContainer>
  );
};

const Home = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const onLoad = () => {
      console.log("loaded");

      setIsLoaded(true);
    };

    window.onload = onLoad;
  }, []);

  return (
    <>
      {isLoaded || (
        <>
          <GlobalSpinnerStyle />
          <Spinner />
        </>
      )}
      <HomePage props={props} />
    </>
  );
};

export default Home;
