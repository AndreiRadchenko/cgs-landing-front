import React, { useState, lazy, Suspense } from "react";
import type { NextPage } from "next";
import parse from "html-react-parser";
import Head from "next/head";
import Body from "../components/Body/Body";
import { Loading, Page, Spinner, SpinnerWrapper } from "../styles/Page.styled";
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
import SpinnerImg from "../../public/spinner.svg";

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
          <SpinnerWrapper>
            <Spinner src={SpinnerImg.src} />
            Website is on ongoing maintenance...
          </SpinnerWrapper>
        </>
      )}
    </>
  );
};

export default Home;
