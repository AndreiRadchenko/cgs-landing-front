import { NextPage } from "next";
import parse from "html-react-parser";
import Head from "next/head";
import React from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import { adminWebService } from "../../services/services/adminServicesWebPage";
import HeadBlock from "../../components/WebService/HeadBlock";
import * as Styled from "../../styles/WebService/Layout";
import WhyIsWebAMust from "../../components/WebService/WhyIsWebAMust";
import WebPros from "../../components/WebService/WebPros";
import SolutionBlock from "../../components/WebService/SolutionBlock";
import PerksBlock from "../../components/WebService/PerksBlock";
import FooterBlock from "../../components/WebService/FooterBlock";
import { Layout } from "../../styles/Layout.styled";
import ShowCase from "../../components/ShowCase";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKeys.getServiceWebPage, () =>
    adminWebService.getWebServicePage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const WebDevelopment: NextPage = () => {
  const { data } = useQuery(queryKeys.getServiceWebPage, () =>
    adminWebService.getWebServicePage()
  );

  useQuery(queryKeys.getFullHomePage, () => adminGlobalService.getFullPage());

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

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
          <WebPros />
          <WhyIsWebAMust />
          <SolutionBlock />
        </Styled.Layout>
      </Layout>
      <ShowCase projects={data?.projects} />
      <Layout>
        <Styled.Layout>
          <PerksBlock />
          <FooterBlock />
        </Styled.Layout>
      </Layout>
      <FooterNew />
    </>
  );
};

export default WebDevelopment;
