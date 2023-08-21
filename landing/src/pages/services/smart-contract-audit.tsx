import React, { useState } from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import Head from "next/head";
import parse from "html-react-parser";

import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeadBlock from "../../components/DappAuditService/HeadBlockDapp";
import HowDoProvideBlock from "../../components/DappAuditService/HowDoProvideBlock";
import ShowCase from "../../components/ShowCase";
import FooterBlock from "../../components/DappAuditService/FooterBlockDapp";
import CalendlyInfoModal from "../../components/Calendly/CalendlyInfoModal";
import PerksOfCoopComponent from "../../components/ServisesComponents/PerksOfCoopComponent";
import TeamMembers from "../../components/ServisesComponents/TeamMembers/TeamMembersComponent";
import { Loader, LoaderStub } from "../../components/Loader";
import FigureOutBlock from "../../components/DappAuditService/FigureOutBlock";
import { calendlyPopupInfoHandler } from "../../utils/calendlyPopupInfoHandler";

import { Layout } from "../../styles/Layout.styled";
import * as Styled from "../../styles/DappAuditService/Common.styled";

import { queryKeys } from "../../consts/queryKeys";

import { adminGlobalService } from "../../services/adminHomePage";
import { adminAiService } from "../../services/services/AdminServiceAiSolution";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getFullHomePage], () =>
    adminGlobalService.getFullPage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const DappAuditPage: NextPage = () => {
  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());
  const { data, isLoading } = useQuery([queryKeys.getServiceAiPage], () =>
    adminAiService.getAiServicePage()
  );

  const [isCalendlySuccessfull, setIsCalendlySuccessfull] = useState(false);

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  calendlyPopupInfoHandler(() => setIsCalendlySuccessfull(true));

  return (
    <Loader active={isLoading}>
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
                <HeadBlock />
                <FigureOutBlock />
                {data ? (
                  <PerksOfCoopComponent
                    className="dappAudit"
                    data={data.worthBlock}
                  />
                ) : null}
                <HowDoProvideBlock />
              </Styled.Layout>
            </Layout>
            {data && <ShowCase projects={data.projects} />}
            <Layout>
              <TeamMembers
                className={"dappAuditTeam"}
                teamMembers={data?.teamMembers}
              />
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

export default DappAuditPage;
