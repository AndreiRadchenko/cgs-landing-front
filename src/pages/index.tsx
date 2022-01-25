import React from "react";
import type { NextPage } from "next";
import Body from "../components/Body/Body";
import * as StyledCommon from "../styles/Page.styled";
import LetsCode from "../components/LetsCode/LetsCode";

const Home: NextPage = () => {
  return (
    <div>
      <StyledCommon.Page>
        <LetsCode />
      </StyledCommon.Page>
    </div>
  );
};

export default Home;
