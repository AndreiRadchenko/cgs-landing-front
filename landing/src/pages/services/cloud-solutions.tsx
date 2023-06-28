import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Head from "next/head";

import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeadBlock from "../../components/CloudService/HeadBlock";
import ProvidesBlock from "../../components/CloudService/ProvidesBlock";
import FooterBlock from "../../components/CloudService/FooterBlock";
import ShowCase from "../../components/ShowCase";
import CalendlyInfoModal from "../../components/Calendly/CalendlyInfoModal";
import PerksOfCoopComponent from "../../components/Services/PerksOfCoopComponent";
import { TeamMembers, FreeService } from "../../components/ServisesComponents";
import { Loader, LoaderStub } from "../../components/Loader";

import * as Styled from "../../styles/CloudService/Layout";
import { Layout, PageArticle } from "../../styles/Layout.styled";
import { queryKeys } from "../../consts/queryKeys";
import { adminCloudService } from "../../services/services/AdminServicesCloudSolution";
import { adminGlobalService } from "../../services/adminHomePage";
import { adminPortfolioService } from "../../services/adminPortfolioPage";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getServiceCloudPage], () =>
    adminCloudService.getCloudSolutionPage()
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

const CloudService = () => {
  const { data, isSuccess, isFetching } = useQuery(
    [queryKeys.getServiceCloudPage],
    () => adminCloudService.getCloudSolutionPage(),
    { refetchOnWindowFocus: false }
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
    <Loader active={isFetching}>
      {isFetching && !isSuccess ? (
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
                <ProvidesBlock
                  className={
                    data && data.projects.length === 0
                      ? "withoutShowcase"
                      : undefined
                  }
                />
              </Styled.Layout>
            </Layout>
            <Styled.ShowCaseAlign>
              <ShowCase projects={data?.projects} />
            </Styled.ShowCaseAlign>
            <Layout>
              <Styled.Layout>
                {data?.worthBlock && (
                  <PerksOfCoopComponent
                    className={"cloudSolutions"}
                    data={data?.worthBlock}
                  />
                )}
              </Styled.Layout>
              <Styled.TeamMembersAlign>
                <TeamMembers teamMembers={data?.teamMembers} />
              </Styled.TeamMembersAlign>
              <FreeService freeServices={data?.freeServices} />
              <Styled.Layout>
                <FooterBlock />
              </Styled.Layout>
            </Layout>
          </PageArticle>

          <FooterNew />
        </>
      )}
    </Loader>
  );
};

export default CloudService;
