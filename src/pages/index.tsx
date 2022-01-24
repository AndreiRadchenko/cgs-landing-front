import React from "react";
import type { NextPage } from "next";
import Body from "../components/Body/Body";
import * as StyledCommon from "../styles/Page.styled";
import AboutUs from "../components/AboutUs/AboutUs";

const Home: NextPage = () => {
  return (
    <div>
      <StyledCommon.Page>
        <Body />
        <AboutUs />
      </StyledCommon.Page>
    </div>
  );
};

export default Home;
