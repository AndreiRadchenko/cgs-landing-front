import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import { NextPage } from "next";
import Head from "next/head";
import parse from "html-react-parser";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import React, { useEffect, useState } from "react";
import FooterNew from "../../components/FooterNew/FooterNew";
import { Layout } from "../../styles/Layout.styled";
import * as Styled from "../../styles/DappAuditService/Common.styled";
import HeadBlock from "../../components/DappAuditService/HeadBlock";
import HowDoProvideBlock from "../../components/DappAuditService/HowDoProvideBlock";
import ShowCase from "../../components/ShowCase";
import FooterBlock from "../../components/DappAuditService/FooterBlock";
import CalendlyInfoModal from "../../components/Calendly/CalendlyInfoModal";
import PerksOfCoopComponent from "../../components/Services/PerksOfCoopComponent";
import { adminDappAuditService } from "../../services/services/adminServicesDappAuditPage";
import { adminAiService } from "../../services/services/AdminServiceAiSolution";
import TeamMembers from "../../components/ServisesComponents/TeamMembers/TeamMembersComponent";
import { Loader, LoaderStub } from "../../components/Loader";
import FigureOutBlock from "../../components/DappAuditService/FigureOutBlock";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getServiceDappAuditPage], () =>
    adminDappAuditService.getDappAuditServicePage()
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

const DappAuditPage: NextPage = () => {
  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());
  const { data, isLoading, isFetching } = useQuery(
    [queryKeys.getServiceAiPage],
    () => adminAiService.getAiServicePage(),
    { refetchOnWindowFocus: false }
  );

  const [isCalendlySuccessfull, setIsCalendlySuccessfull] = useState(false);

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  const [onLoadCount, setOnLoadCount] = useState(0);
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

  useEffect(() => {
    if (isFetching && !isLoading) {
      setIsMainImagesLoaded(true);
    }
  }, [isFetching, isLoading]);

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
                <HeadBlock
                  setOnLoadCount={setOnLoadCount}
                  onLoadCount={onLoadCount}
                  setIsMainImagesLoaded={setIsMainImagesLoaded}
                />
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
