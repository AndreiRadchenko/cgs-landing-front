import React from "react";
import parse from "html-react-parser";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import Head from "next/head";
import { adminBlockchainService } from "../../services/services/AdminServiceBlockchainPage";
import { adminGlobalService } from "../../services/adminHomePage";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeadBlock from "../../components/BlockchainService/HeadBlock";
import ServicesBlock from "../../components/BlockchainService/ServicesBlock";
import YourWayBlock from "../../components/BlockchainService/YourWayBlock";
import AboutBlock from "../../components/BlockchainService/AboutBlock";
import FooterBlock from "../../components/BlockchainService/FooterBlock";
import * as Styled from "../../styles/BlockchainService/Layout";
import { Layout, PageArticle } from "../../styles/Layout.styled";
import ShowCase from "../../components/ShowCase";

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
  const { data } = useQuery(
    [queryKeys.getServiceBlockchainPage],
    async () => await adminBlockchainService.getBlockchainDevelopmentPage()
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
      <PageArticle>
        <Layout>
          <Styled.Layout>
            <HeadBlock />
            <ServicesBlock />
            <YourWayBlock />
          </Styled.Layout>
        </Layout>
        <ShowCase projects={data?.projects} />
        <Layout>
          <Styled.Layout className="mobile-visivble">
            <AboutBlock />
            <FooterBlock />
          </Styled.Layout>
        </Layout>
      </PageArticle>
      <FooterNew />
    </>
  );
};

export default BlockchainService;
