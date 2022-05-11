import React from "react";
import type { NextPage } from "next";
import Body from "../components/Body/Body";
import * as StyledCommon from "../styles/Page.styled";
import Projects from "../components/Projects/Projects";
import AboutUs from "../components/AboutUs/AboutUs";
import Partners from "../components/Partners/Partners";
import CarouselFeedback from "./../components/Feedback/CarouselFeedback";
import Technologies from "../components/Technologies/Technologies";
import LetsCode from "../components/LetsCode/LetsCode";
import OurTeam from "../components/OurTeam/OurTeam";
import HowWeWorkList from "../components/HowWeWorkList/HowWeWorkList";
import YesBegin from "../components/YesBegin/YesBegin";
import Footer from "../components/Footer/Footer";
import { useScrollTo } from "../hooks/useScrollTo";
import { useQuery } from "react-query";
import { queryKeys } from "../consts/queryKeys";
import { adminGlobalService } from "../services/adminHomePage";
import { IDataResponse } from "../types/Admin/Response.types";
import { IPortfolioResponse } from "../types/Admin/AdminPortfolio";

interface IHomeData {
  data: IDataResponse | undefined;
  isLoading: boolean;
}

interface IPortfolioData {
  data: IPortfolioResponse | undefined;
  isLoading: boolean;
}

const Home: NextPage = () => {
  const [ref, scrollHandler] = useScrollTo<HTMLDivElement>();

  const homeData: IHomeData = useQuery(queryKeys.getFullHomePage, () =>
    adminGlobalService.getFullPage()
  );

  const portfolioData: IPortfolioData = useQuery(queryKeys.getPortfolio, () =>
    adminGlobalService.getPortfolio()
  );
  return homeData.isLoading ? (
    <StyledCommon.Loading>LOADING...</StyledCommon.Loading>
  ) : (
    <>
      <StyledCommon.Page>
        <Body welcomePageButtonHandler={scrollHandler} />
        <AboutUs />
        <Partners />
        <Projects />
        <CarouselFeedback />
        <Technologies />
        <OurTeam />
      </StyledCommon.Page>
      <HowWeWorkList />
      <YesBegin clickHandler={scrollHandler} />
      <StyledCommon.Page>
        <div ref={ref}>
          <LetsCode />
        </div>
      </StyledCommon.Page>
      <Footer />
    </>
  );
};

export default Home;
