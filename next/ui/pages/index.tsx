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
`

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
