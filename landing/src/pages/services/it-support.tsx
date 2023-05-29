import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminSupportService } from "../../services/services/adminServiceSupportPage";
import Head from "next/head";
import { adminGlobalService } from "../../services/adminHomePage";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeadBlock from "../../components/OngoingSupport/HeadBlock";
import WorkBlock from "../../components/OngoingSupport/WorkBlock";
import ProvidesBlock from "../../components/OngoingSupport/ProvidesBlock";
import BonusesBlock from "../../components/OngoingSupport/BonusesBlock";
import FooterBlock from "../../components/OngoingSupport/FooterBlock";
import * as Styled from "../../styles/OngoingSupport/Layout";
import { Layout, PageArticle } from "../../styles/Layout.styled";
import ShowCase from "../../components/ShowCase";
import CalendlyInfoModal from "../../components/Calendly/CalendlyInfoModal";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getServiceSupportPage], () =>
    adminSupportService.getSupportServicePage()
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

const OngoingSupport = () => {
  const { data } = useQuery([queryKeys.getServiceSupportPage], () =>
    adminSupportService.getSupportServicePage()
  );
  const [isCalendlySuccessfull, setIsCalendlySuccessfull] = useState(false);

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

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
            <WorkBlock />
            <ProvidesBlock
              className={
                data && data.projects.length === 0
                  ? "withoutShowcase"
                  : undefined
              }
            />
          </Styled.Layout>
        </Layout>
        <ShowCase projects={data?.projects} />
        <Layout>
          <Styled.Layout>
            <BonusesBlock />
            <FooterBlock />
          </Styled.Layout>
        </Layout>
      </PageArticle>

      <FooterNew />
    </>
  );
};

export default OngoingSupport;
