import { NextPage } from "next";
import parse from "html-react-parser";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import { adminWebService } from "../../services/services/adminServicesWebPage";
import HeadBlock from "../../components/WebService/HeadBlock";
import * as Styled from "../../styles/WebService/Layout";
import WhyIsWebAMust from "../../components/WebService/WhyIsWebAMust";
import WebPros from "../../components/WebService/WebPros";
import SolutionBlock from "../../components/WebService/SolutionBlock";
import PerksBlock from "../../components/WebService/PerksBlock";
import FooterBlock from "../../components/WebService/FooterBlock";
import { Layout, PageArticle } from "../../styles/Layout.styled";
import ShowCase from "../../components/ShowCase";
import CalendlyInfoModal from "../../components/Calendly/CalendlyInfoModal";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getServiceWebPage], () =>
    adminWebService.getWebServicePage()
  );

  await queryClient.prefetchQuery([queryKeys.getFullHomePage], () =>
    adminGlobalService.getFullPage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const WebDevelopment: NextPage = () => {
  const { data } = useQuery([queryKeys.getServiceWebPage], () =>
    adminWebService.getWebServicePage()
  );
  const [isCalendlySuccessfull, setIsCalendlySuccessfull] = useState(false);

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

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
            <WebPros />
            <WhyIsWebAMust />
            <SolutionBlock
              className={
                data && data?.projects.length === 0
                  ? "withoutShowcase"
                  : undefined
              }
            />
          </Styled.Layout>
        </Layout>
        <ShowCase projects={data?.projects} />
        <Layout>
          <Styled.Layout>
            <PerksBlock />
            <FooterBlock />
          </Styled.Layout>
        </Layout>
      </PageArticle>
      <FooterNew />
    </>
  );
};

export default WebDevelopment;
