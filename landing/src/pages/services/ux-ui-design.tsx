import React, { useState } from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Head from "next/head";
import parse from "html-react-parser";

import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeadBlock from "../../components/UxUiService/HeadBlockUxUi";
import WhatDoWeDoBlock from "../../components/UxUiService/WhatDoWeDoBlock";
import DesignBlock from "../../components/UxUiService/DesignBlock";
import EssentialBlock from "../../components/UxUiService/EsentialBlock";
import {
  TeamMembers,
  OtherServices,
} from "../../components/ServisesComponents";
import FooterBlock from "../../components/UxUiService/FooterBlockUxUi";
import ShowCase from "../../components/ShowCase";
import CalendlyInfoModal from "../../components/Calendly/CalendlyInfoModal";
import { Loader, LoaderStub } from "../../components/Loader";
import { calendlyPopupInfoHandler } from "../../utils/calendlyPopupInfoHandler";

import * as Styled from "../../styles/UxUiService/Layout.styled";
import { Layout, PageArticle } from "../../styles/Layout.styled";

import { queryKeys } from "../../consts/queryKeys";

import { adminUxUiService } from "../../services/services/AdminServiceUxUiPage";
import { adminGlobalService } from "../../services/adminHomePage";
import { adminPortfolioService } from "../../services/adminPortfolioPage";
import { useCalendlyEventListener } from "react-calendly";
import { useGetCelendlyMeetingData } from "../../hooks/useGetCelendlyMeetingData";

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
  const { data, isLoading } = useQuery(
    [queryKeys.getServiceUxUiPage],
    async () => await adminUxUiService.getUxUiServicePage()
  );

  const [isCalendlySuccessfull, setIsCalendlySuccessfull] = useState(false);

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());
  useQuery([queryKeys.getPortfolio], () => adminPortfolioService.getReviews());

  const { customHead, metaDescription, metaTitle } = data?.meta ?? {};

  calendlyPopupInfoHandler(() => setIsCalendlySuccessfull(true));

  const { dateTime, joinLink } = useGetCelendlyMeetingData();

  return (
    <Loader active={isLoading}>
      {isLoading ? (
        <LoaderStub />
      ) : (
        <>
          {isCalendlySuccessfull && (
            <CalendlyInfoModal
              celendlyUri={joinLink}
              dateTime={dateTime}
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
            <ShowCase projects={data?.projects} />
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
