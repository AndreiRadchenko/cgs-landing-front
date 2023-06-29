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
import WebPros from "../../components/WebService/WebPros";
import SolutionBlock from "../../components/WebService/SolutionBlock";
import FooterBlock from "../../components/WebService/FooterBlock";
import { Layout } from "../../styles/Layout.styled";
import ShowCase from "../../components/ShowCase";
import CalendlyInfoModal from "../../components/Calendly/CalendlyInfoModal";
import { Loader, LoaderStub } from "../../components/Loader";
import { FreeService, TeamMembers } from "../../components/ServisesComponents";

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
  const { data, isLoading } = useQuery([queryKeys.getServiceWebPage], () =>
    adminWebService.getWebServicePage()
  );
  const [isCalendlySuccessfull, setIsCalendlySuccessfull] = useState(false);

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  const [isMainImageLoaded, setIsMainImagesLoaded] = useState(false);

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
    <Loader active={isLoading || !isMainImageLoaded}>
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
          <>
            <Layout>
              <Styled.Layout>
                <HeadBlock setIsMainImagesLoaded={setIsMainImagesLoaded} />
                <WebPros />
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
              <TeamMembers className="webDev" teamMembers={data?.teamMembers} />
              <FreeService freeServices={data?.freeServices} />
              <Styled.Layout>
                <FooterBlock />
              </Styled.Layout>
            </Layout>
          </>
          <FooterNew />
        </>
      )}
    </Loader>
  );
};

export default WebDevelopment;
