import React, { useState } from "react";
import type { NextPage } from "next";
import parse from "html-react-parser";
import Head from "next/head";
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
  const [isClicked, setIsClicked] = useState(false);

  const { data, isLoading }: IHomeData = useQuery(
    queryKeys.getFullHomePage,
    () => adminGlobalService.getFullPage()
  );

  const portfolioData: IPortfolioData = useQuery(queryKeys.getPortfolio, () =>
    adminGlobalService.getPortfolio()
  );

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  
  return (
    <>
      {isLoading ? (
        <StyledCommon.Loading>LOADING...</StyledCommon.Loading>
      ) : (
        <>
          <Head>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            {customHead && parse(customHead)}
          </Head>
          <StyledCommon.Page>
            <Body
              welcomePageButtonHandler={scrollHandler}
              setIsClicked={setIsClicked}
            />
            <AboutUs />
            <Partners />
            <Projects />
            <CarouselFeedback />
            <Technologies />
            <OurTeam />
          </StyledCommon.Page>
          <HowWeWorkList isClicked={isClicked} />
          <YesBegin clickHandler={scrollHandler} disableScroll={setIsClicked} />
          <StyledCommon.Page className="lets-code">
            <div ref={ref}>
              <LetsCode />
            </div>
          </StyledCommon.Page>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
