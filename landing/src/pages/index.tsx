import React, { useState, lazy, Suspense } from "react";
import type { NextPage } from "next";
import parse from "html-react-parser";
import Head from "next/head";
import Body from "../components/Body/Body";
import { Loading, Page } from "../styles/Page.styled";
import Projects from "../components/Projects/Projects";
import AboutUs from "../components/AboutUs/AboutUs";
const Partners = lazy(() => import("../components/Partners/Partners"));
const CarouselFeedback = lazy(
  () => import("./../components/Feedback/CarouselFeedback")
);
const Technologies = lazy(
  () => import("../components/Technologies/Technologies")
);
const LetsCode = lazy(() => import("../components/LetsCode/LetsCode"));
const OurTeam = lazy(() => import("../components/OurTeam/OurTeam"));
const HowWeWorkList = lazy(
  () => import("../components/HowWeWorkList/HowWeWorkList")
);
const YesBegin = lazy(() => import("../components/YesBegin/YesBegin"));
const Footer = lazy(() => import("../components/Footer/Footer"));
import { useScrollTo } from "../hooks/useScrollTo";
import { useQuery } from "react-query";
import { queryKeys } from "../consts/queryKeys";
import { adminGlobalService } from "../services/adminHomePage";
import { IDataResponse } from "../types/Admin/Response.types";
import getServerSideProps from "../utils/Redirect";
import { IPortfolioResponse } from "../types/Admin/AdminPortfolio";

export { getServerSideProps };

interface IPortfolioData {
  data: IPortfolioResponse | undefined;
  isLoading: boolean;
}

interface IHomeData {
  data: IDataResponse | undefined;
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
        <Loading>LOADING...</Loading>
      ) : (
        <>
          <Head>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            {customHead && parse(customHead)}
          </Head>
          <Page>
            <Body
              welcomePageButtonHandler={scrollHandler}
              setIsClicked={setIsClicked}
              heroImg={data?.EditInformationBlock.image.url}
            />
            <AboutUs />
            <Suspense fallback={<div>Loading...</div>}>
              <Partners />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <Projects />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <CarouselFeedback />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <Technologies />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <OurTeam />
            </Suspense>
          </Page>
          <Suspense fallback={<div>Loading...</div>}>
            <HowWeWorkList isClicked={isClicked} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <YesBegin
              clickHandler={scrollHandler}
              disableScroll={setIsClicked}
            />
          </Suspense>
          <Page className="lets-code">
            <div ref={ref}>
              <Suspense fallback={<div>Loading...</div>}>
                <LetsCode />
              </Suspense>
            </div>
          </Page>
          <Suspense fallback={<div>Loading...</div>}>
            <Footer />
          </Suspense>
        </>
      )}
    </>
  );
};

export default Home;
