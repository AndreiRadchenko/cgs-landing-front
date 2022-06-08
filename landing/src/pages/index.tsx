import React, { useState } from "react";
import type { NextPage } from "next";
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
import getServerSideProps from "../utils/Redirect";

export { getServerSideProps };

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

  const homeData: IHomeData = useQuery(queryKeys.getFullHomePage, () =>
    adminGlobalService.getFullPage()
  );

  const portfolioData: IPortfolioData = useQuery(queryKeys.getPortfolio, () =>
    adminGlobalService.getPortfolio()
  );
  return (
    <>
      <Head>
        <meta
          name="facebook-domain-verification"
          content="0k9v3beamz5vi93rnc4uqe17s0ise2"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://cgsteam.io",
                  url: "https://cgsteam.io",
                  sameAs: [
                    "https://github.com/CodeGeneration-2020/",
                    "https://www.upwork.com/o/companies/~01a24f185f6fd7afd0/",
                    "https://clutch.co/profile/code-generation#summary",
                    "https://ua.linkedin.com/company/cgs-team",
                  ],
                  name: "CGS - team",
                  subOrganization: "https://cgs-blockchain.io",
                  review: [
                    {
                      "@type": "Review",
                      author: "Bertie I.",
                      reviewBody:
                        "CGS-team successfully implemented the solution in just two weeks. During the engagement, their project management and communication were excellent. They were responsive, fast, and cost-effective",
                      reviewRating: {
                        "@type": "Rating",
                        bestRating: "5",
                        ratingValue: "5",
                        worstRating: "1",
                      },
                    },
                    {
                      "@type": "Review",
                      author: "Courtney Robinson",
                      reviewBody:
                        "The team provided excellent service in delivering the project. They are intuitive in development and expert in execution. With deep technical knowledge and user-friendly communication, I would definitely recommend. We will be working with them again soon.",
                      reviewRating: {
                        "@type": "Rating",
                        bestRating: "5",
                        ratingValue: "5",
                        worstRating: "1",
                      },
                    },
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "sales.codegeneration@gmail.com",
                  },
                  logo: [
                    {
                      "@type": "ImageObject",
                      "@id": "https://cgsteam.io",
                      inLanguage: "en-US",
                      url: "https://cgsteam.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.2fb87f81.svg&w=640&q=75",
                      width: 200,
                      height: 41,
                      caption: "CGS - team",
                    },
                  ],
                  slogan:
                    "The team of sharp-witted devs is on the brink of you.",
                  legalName: "CGS - team",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://cgsteam.io/#website",
                  url: "https://cgsteam.io",
                  name: "CGS - team",
                  description:
                    "We provide end-to-end development using the MERN stack, which means our team adores Javascript. Furthermore, innovative ideas and new challenges are our passion.",
                  publisher: { "@id": "https://cgsteam.io" },
                },
              ],
            }),
          }}
        ></script>
      </Head>
      {homeData.isLoading ? (
        <StyledCommon.Loading>LOADING...</StyledCommon.Loading>
      ) : (
        <>
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
