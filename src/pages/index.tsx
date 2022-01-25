import React from "react";
import type { NextPage } from "next";
import Body from "../components/Body/Body";
import * as StyledCommon from "../styles/Page.styled";
// import LetsCode from "../components/LetsCode/LetsCode";
import HowWeWorkList from "../components/HowWeWorkList/HowWeWorkList";
import items from "../mock/HowWeWorkItem";

const Home: NextPage = () => {
  return (
    <div>
      <StyledCommon.Page>
        <Body />
        <HowWeWorkList items={items} />
        {/* <LetsCode /> */}
      </StyledCommon.Page>
    </div>
  );
};

export default Home;
