import React, { useState } from "react";
import parse from "html-react-parser";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Head from "next/head";

import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeadBlock from "../../components/BlockchainService/HeadBlockBlockchain";
import ServicesBlock from "../../components/BlockchainService/ServicesBlock";
import YourWayBlock from "../../components/BlockchainService/YourWayBlock";
import FooterBlock from "../../components/BlockchainService/FooterBlockBlockchain";
import ShowCase from "../../components/ShowCase";
import CalendlyInfoModal from "../../components/Calendly/CalendlyInfoModal";
import NeedsAppsBenefitComponent from "../../components/ServisesComponents/NeedsAppsBenefitComponent";
import Advantages from "../../components/ServisesComponents/Advantages/AdvantagesComponent/index";
import TeamMembers from "../../components/ServisesComponents/TeamMembers/TeamMembersComponent";
import { Loader, LoaderStub } from "../../components/Loader";
import { calendlyPopupInfoHandler } from "../../utils/calendlyPopupInfoHandler";

import * as Styled from "../../styles/BlockchainService/Layout";
import { Layout, PageArticle } from "../../styles/Layout.styled";

import { adminBlockchainService } from "../../services/services/AdminServiceBlockchainPage";
import { adminGlobalService } from "../../services/adminHomePage";

import { queryKeys } from "../../consts/queryKeys";
import { useCalendlyEventListener } from "react-calendly";
import { useGetCelendlyMeetingData } from "../../hooks/useGetCelendlyMeetingData";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    [queryKeys.getServiceBlockchainPage],
    async () => await adminBlockchainService.getBlockchainDevelopmentPage()
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

const BlockchainService = () => {
  const { data, isLoading } = useQuery(
    [queryKeys.getServiceBlockchainPage],
    async () => await adminBlockchainService.getBlockchainDevelopmentPage()
  );
  const [isCalendlySuccessfull, setIsCalendlySuccessfull] = useState(false);

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const { customHead, metaDescription, metaTitle } = { ...data?.meta };

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
                <ServicesBlock />
                <YourWayBlock />
              </Styled.Layout>
              <TeamMembers
                className={"blockchainTeam"}
                teamMembers={data?.teamMembers}
              />
            </Layout>
            <ShowCase projects={data?.projects} />
            <Layout>
              <Advantages
                className={"blockchainAdvantages"}
                advantages={data?.advantages}
              />
              <>{data && <NeedsAppsBenefitComponent data={data} />}</>
              <Styled.Layout className="mobile-visivble">
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

export default BlockchainService;
