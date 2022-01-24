import React from "react";
import type { NextPage } from "next";
import Body from "../components/Body/Body";
import * as StyledCommon from "../styles/Page.styled";
import Projects from "../components/Projects/Projects";
import AboutUs from "../components/AboutUs/AboutUs";
import Partners from "../components/Partners/Partners";
import Feedback from "../components/Feedback/Feedback";
import Technologies from "../components/Technologies/Technologies";

const Home: NextPage = () => {
  return (
    <div>
      <StyledCommon.Page>
        <Body />
        <AboutUs />
        <Partners />
        <Projects />
        <Feedback />
        <Technologies />
      </StyledCommon.Page>
    </div>
  );
};

export default Home;
