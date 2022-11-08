import React from "react";
import parse from "html-react-parser";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminCloudService } from "../../services/services/AdminServicesCloudSolution";
import { adminGlobalService } from "../../services/adminHomePage";
import Head from "next/head";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeadBlock from "../../components/CloudService/HeadBlock";
import WhyItWorthIt from "../../components/CloudService/WhyItWorthIt";
import ProvidesBlock from "../../components/CloudService/ProvidesBlock";
import WorkBlock from "../../components/CloudService/WorkBlock";
import FooterBlock from "../../components/CloudService/FooterBlock";
import * as Styled from "../../styles/CloudService/Layout";
import { Layout } from "../../styles/Layout.styled";
import ShowCase from "../../components/ShowCase";

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
  const { data } = useQuery([queryKeys.getServiceCloudPage], () =>
    adminCloudService.getCloudSolutionPage()
  );

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const { customHead, metaDescription, metaTitle } = { ...data?.meta };

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>
      <HeaderNavNew />
      <Layout>
        <Styled.Layout>
          <HeadBlock />
          <WhyItWorthIt />
          <ProvidesBlock
            className={
              data && data.projects.length === 0 ? "withoutShowcase" : undefined
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
      <FooterNew />
    </>
  );
};

export default CloudService;
