import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import parse from "html-react-parser";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import HeadBlock from "../../components/MobileService/HeadBlock";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import WorthIt from "../../components/MobileService/WorthIt";
import StrongBlock from "../../components/MobileService/StrongBlock";
import WhoNeedAppBlock from "../../components/MobileService/WhoNeedAppBlock";
import HowDoWeWork from "../../components/MobileService/HowDoWeWork";
import ProfBlock from "../../components/MobileService/ProfBlock";
import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import { adminMobileService } from "../../services/services/adminServicesMobilePage";
import Head from "next/head";
import { Layout, PageArticle } from "../../styles/Layout.styled";
import { LocalLayout } from "../../styles/MobileService/Layout";
import ShowCase from "../../components/ShowCase";
import CalendlyInfoModal from "../../components/Calendly/CalendlyInfoModal";
import TeamMembers from "../../components/TeamMembers";
import PerksOfCoopComponent from "../../components/Services/PerksOfCoopComponent";
import { IServiceMobile } from "../../types/Admin/Response.types";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getServiceMobilePage], () =>
    adminMobileService.getMobileServicePage()
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
const MobileAppDevelopment: NextPage = () => {
  const { data } = useQuery([queryKeys.getServiceMobilePage], () =>
    adminMobileService.getMobileServicePage()
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
          <LocalLayout>
            <HeadBlock />
            <WorthIt />
            <StrongBlock />
            <WhoNeedAppBlock
              className={
                data && data.projects.length === 0
                  ? "withoutShowcase"
                  : undefined
              }
            />
          </LocalLayout>
        </Layout>
        <ShowCase projects={data?.projects} />
        <TeamMembers />
        <Layout>
          <LocalLayout>
            <HowDoWeWork />
            <ProfBlock />
          </LocalLayout>
        </Layout>
      </PageArticle>
      <FooterNew />
    </>
  );
};
export default MobileAppDevelopment;
