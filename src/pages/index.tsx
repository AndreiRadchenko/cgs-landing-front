import React from "react";
import type { NextPage } from "next";
import Body from "../components/Body/Body";
import * as StyledCommon from "../styles/Page.styled";
import HowWeWorksItems from "../mock/HowWeWorkItem";
import HowWeWorkList from "../components/HowWeWorkList/HowWeWorkList";

const Home: NextPage = () => {
  return (
    <div>
      <StyledCommon.Page>
        <Body />
        <HowWeWorkList items={HowWeWorksItems} />
      </StyledCommon.Page>
    </div>
  );
};

export default Home;
