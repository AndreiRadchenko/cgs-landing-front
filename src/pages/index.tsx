import React from "react";
import type { NextPage } from "next";
import * as StyledCommon from "../styles/Page.styled";
import Feedback from "../components/Feedback/Feedback";

const Home: NextPage = () => {
  return (
    <div>
      <StyledCommon.Page>
        <Feedback />
      </StyledCommon.Page>
    </div>
  );
};

export default Home;
