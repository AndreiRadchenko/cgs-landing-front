import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import { adminDappAuditService } from "../../services/services/adminServicesDappAuditPage";
import { NextPage } from "next";
import Head from "next/head";
import parse from "html-react-parser";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import React from "react";
import FooterNew from "../../components/FooterNew/FooterNew";
import { Layout, PageArticle } from "../../styles/Layout.styled";
import * as Styled from "../../styles/DappAuditService/Common.styled";
import HeadBlock from "../../components/Ai/HeadBlock";
import FigureOutBlock from "../../components/Ai/FigureOutBlock";
import HowDoProvideBlock from "../../components/Ai/HowDoProvideBlock";
import ShowCase from "../../components/ShowCase";
import FooterBlock from "../../components/Ai/FooterBlock";

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
  const { data } = useQuery([queryKeys.getServiceDappAuditPage], () =>
    adminDappAuditService.getDappAuditServicePage()
  );

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

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
            <FigureOutBlock />
            <HowDoProvideBlock />
          </Styled.Layout>
        </Layout>
        <ShowCase projects={data?.projects} />
        <Layout>
          <Styled.Layout>
            <FooterBlock />
          </Styled.Layout>
        </Layout>
      </PageArticle>
      <FooterNew />
    </>
  );
};

export default DappAuditPage;