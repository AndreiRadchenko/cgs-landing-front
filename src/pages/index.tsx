import React from "react";
import type { NextPage } from "next";
import Body from "../components/Body/Body";
import * as StyledCommon from "../styles/Page.styled";
import Projects from "../components/Projects/Projects";
import AboutUs from "../components/AboutUs/AboutUs";
import Partners from "../components/Partners/Partners";
import Feedback from "../components/Feedback/Feedback";
import Technologies from "../components/Technologies/Technologies";
import LetsCode from "../components/LetsCode/LetsCode";
import OurTeam from "../components/OurTeam/OurTeam";
import NoMobileScreenSupport from "./NoMobileScreenSupport";
import HowWeWorkList from "../components/HowWeWorkList/HowWeWorkList";
import howWeWorksItems from "../mock/HowWeWorkItem";
import YesBegin from "../components/YesBegin/YesBegin";
import Footer from "../components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <>
      <NoMobileScreenSupport />
      <StyledCommon.Page>
        <Body />
        <AboutUs />
        <Partners />
        <Projects />
        <Feedback />
        <Technologies />
        <OurTeam />
      </StyledCommon.Page>
      <HowWeWorkList items={howWeWorksItems} />
      <YesBegin />
      <StyledCommon.Page>
        <LetsCode />
      </StyledCommon.Page>
      <Footer />
    </>
  );
};

export default Home;
