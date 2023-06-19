import React, { useEffect, useState } from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Head from "next/head";
import parse from "html-react-parser";

import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeadBlock from "../../components/UxUiService/HeadBlock";
import WhatDoWeDoBlock from "../../components/UxUiService/WhatDoWeDoBlock";
import DesignBlock from "../../components/UxUiService/DesignBlock";
import EssentialBlock from "../../components/UxUiService/EsentialBlock";
import {
  TeamMembers,
  OtherServices,
} from "../../components/ServisesComponents";
import FooterBlock from "../../components/UxUiService/FooterBlock";
import ShowCase from "../../components/ShowCase";
import CalendlyInfoModal from "../../components/Calendly/CalendlyInfoModal";
import { Loader, LoaderStub } from "../../components/Loader";

import * as Styled from "../../styles/UxUiService/Layout.styled";
import { Layout, PageArticle } from "../../styles/Layout.styled";
import { queryKeys } from "../../consts/queryKeys";
import { adminUxUiService } from "../../services/services/AdminServiceUxUiPage";
import { adminGlobalService } from "../../services/adminHomePage";
import { adminPortfolioService } from "../../services/adminPortfolioPage";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    [queryKeys.getServiceUxUiPage],
    async () => await adminUxUiService.getUxUiServicePage()
  );

  await queryClient.prefetchQuery([queryKeys.getFullHomePage], () =>
    adminGlobalService.getFullPage()
  );

  await queryClient.prefetchQuery([queryKeys.getPortfolio], () =>
    adminPortfolioService.getReviews()
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const UxUiDesign = () => {
  const [isFirstImageLoaded, setIsFirstImageLoaded] = useState(false);
  const { data, isLoading } = useQuery(
    [queryKeys.getServiceUxUiPage],
    async () => await adminUxUiService.getUxUiServicePage()
  );

  const [isCalendlySuccessfull, setIsCalendlySuccessfull] = useState(false);

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());
  useQuery([queryKeys.getPortfolio], () => adminPortfolioService.getReviews());

  const { customHead, metaDescription, metaTitle } = { ...data?.meta };

  useEffect(() => {
    const calendlyStatusFinder = (e: any) => {
      window.dataLayer = window.dataLayer || [];

      if (
        e.data.event &&
        e.data.event.indexOf("calendly") === 0 &&
        e.data.event === "calendly.event_scheduled"
      ) {
        setIsCalendlySuccessfull(true);
      }
    };

    window.addEventListener("message", calendlyStatusFinder);

    return () => {
      window.removeEventListener("message", calendlyStatusFinder);
    };
  }, []);

  return (
    <Loader active={isLoading || !isFirstImageLoaded}>
      {isLoading ? (
        <LoaderStub />
      ) : (
        <>
          {isCalendlySuccessfull && (
            <CalendlyInfoModal
              isOpen={isCalendlySuccessfull}
              setIsCalendlySuccessfull={setIsCalendlySuccessfull}
            />
          )}
          <Head>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            {customHead && parse(customHead)}
          </Head>
          <HeaderNavNew />
          <PageArticle>
            <Layout>
              <Styled.Layout>
                <HeadBlock />
                <WhatDoWeDoBlock />
                <EssentialBlock />
                <DesignBlock withoutShowcase={data?.projects.length === 0} />
              </Styled.Layout>
            </Layout>
            <ShowCase
              setIsFirstImageLoaded={setIsFirstImageLoaded}
              projects={data?.projects}
            />
            <Styled.LayoutLocal>
              <Styled.TeamMembersAlign>
                <TeamMembers teamMembers={data?.teamMembers} />
              </Styled.TeamMembersAlign>
              <OtherServices otherServices={data?.otherServices} />
              <Styled.Layout>
                <FooterBlock />
              </Styled.Layout>
            </Styled.LayoutLocal>
          </PageArticle>
          <FooterNew />
        </>
      )}
    </Loader>
  );
};

export default UxUiDesign;
