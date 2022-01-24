import React from "react";
import type { NextPage } from "next";
import Body from "../components/Body/Body";
import * as StyledCommon from "../styles/Page.styled";
import Projects from "../components/Projects/Projects";


const Home: NextPage = () => {
  return (
    <div>
      <StyledCommon.Page>
        {/*<Body />*/}
      <Projects />
      </StyledCommon.Page>
    </div>
  );
};

export default Home;
