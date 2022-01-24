import React from "react";
import type { NextPage } from "next";
import Body from "../components/Body/Body";
import * as StyledCommon from "../styles/Page.styled";

const Home: NextPage = () => {
  return (
    <div>
      <StyledCommon.Page>
        <Body />
      </StyledCommon.Page>
    </div>
  );
};

export default Home;
