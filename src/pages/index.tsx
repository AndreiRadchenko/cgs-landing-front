import React from "react";
import type { NextPage } from "next";
import Body from "../components/Body/Body";
import * as StyledCommon from "../styles/Page.styled";
import Partners from "../components/Partners/Partners";


const Home: NextPage = () => {
  return (
    <div>
      <StyledCommon.Page>
        <Body />
      <Partners />
      </StyledCommon.Page>
    </div>
  );
};

export default Home;
