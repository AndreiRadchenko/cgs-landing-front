import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import {
  dehydrate,
  QueryClient,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import Head from "next/head";
import { adminMobileAuditService } from "../../services/services/adminServiceMobileAuditPage";
import { adminGlobalService } from "../../services/adminHomePage";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeadBlock from "../../components/MobileAuditService/HeadBlockMobileAudit";
import WhatAppBlock from "../../components/MobileAuditService/WhatAppBlock";
import WhatAppIncludeBlock from "../../components/MobileAuditService/WhatAppIncludeBlock";
import ShowCase from "../../components/ShowCase";
import FooterBlock from "../../components/MobileAuditService/FooterBlockMobileAudit";
import * as Styled from "../../styles/MobileAuditService/Layout";
import { Layout } from "../../styles/Layout.styled";
import HowDoWeAuditBlock from "../../components/MobileAuditService/HowDoWeAuditBlock";
import CalendlyInfoModal from "../../components/Calendly/CalendlyInfoModal";
import PerksOfCoopComponent from "../../components/ServisesComponents/PerksOfCoopComponent";
import { IServiceMobileAudit } from "../../types/Admin/Response.types";
import { Loader, LoaderStub } from "../../components/Loader";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getServiceMobileAuditPage], () =>
    adminMobileAuditService.getMobileAuditServicePage()
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

const MobileAuditService = () => {
  const queryClient = useQueryClient();
  const dataAudit = queryClient.getQueryData<IServiceMobileAudit>([
    queryKeys.getServiceMobileAuditPage,
  ])?.whenDoYouNeed;

  const { data, isLoading } = useQuery(
    [queryKeys.getServiceMobileAuditPage],
    () => adminMobileAuditService.getMobileAuditServicePage()
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
              </Styled.Layout>
              <WhatAppBlock />
              <Styled.Layout>
                <WhatAppIncludeBlock />
                {dataAudit && (
                  <PerksOfCoopComponent
                    className={"mobileAudit"}
                    data={dataAudit as any}
                  />
                )}
              </Styled.Layout>
            </Layout>
            <ShowCase projects={data?.projects} />
            <Layout>
              <Styled.Layout>
                <HowDoWeAuditBlock />
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

export default MobileAuditService;
