import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import {
  dehydrate,
  QueryClient,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminCloudService } from "../../services/services/AdminServicesCloudSolution";
import { adminGlobalService } from "../../services/adminHomePage";
import Head from "next/head";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeadBlock from "../../components/CloudService/HeadBlock";
import ProvidesBlock from "../../components/CloudService/ProvidesBlock";
import WorkBlock from "../../components/CloudService/WorkBlock";
import FooterBlock from "../../components/CloudService/FooterBlock";
import * as Styled from "../../styles/CloudService/Layout";
import { Layout, PageArticle } from "../../styles/Layout.styled";
import ShowCase from "../../components/ShowCase";
import CalendlyInfoModal from "../../components/Calendly/CalendlyInfoModal";
import { ICloudService } from "../../types/Admin/Response.types";
import PerksOfCoopComponent from "../../components/Services/PerksOfCoopComponent";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getServiceCloudPage], () =>
    adminCloudService.getCloudSolutionPage()
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

const CloudService = () => {
  const queryClient = useQueryClient();
  const dataWorth = queryClient.getQueryData<ICloudService>([
    queryKeys.getServiceCloudPage,
  ])?.worthBlock;

  const { data } = useQuery([queryKeys.getServiceCloudPage], () =>
    adminCloudService.getCloudSolutionPage()
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
            {dataWorth && <PerksOfCoopComponent data={dataWorth} />}
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
            <WorkBlock />
            <FooterBlock />
          </Styled.Layout>
        </Layout>
      </PageArticle>

      <FooterNew />
    </>
  );
};

export default CloudService;
