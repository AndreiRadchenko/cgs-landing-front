import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import parse from "html-react-parser";
import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import { adminWebAuditService } from "../../services/services/adminServiceWebAuditPage";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import HeadBlock from "../../components/WebAuditService/HeadBlock";
import { Layout } from "../../styles/Layout.styled";
import WhatIsAuditBlock from "../../components/WebAuditService/WhatIsAuditBlock";
import WhichProblemBlock from "../../components/WebAuditService/WhichProblemBlock";
import TypesOfAuditBlock from "../../components/WebAuditService/TypesOfAuditBlock";
import HowToDoBlock from "../../components/WebAuditService/HowToDoBlock";
import ProfessionalAuditBlock from "../../components/WebAuditService/ProfessionalAuditBlock";
import ShowCase from "../../components/ShowCase";
import {
  ShowcaseLayoutIgnore,
  ShowcaseWithoutDataSpacing
} from "../../styles/WebAuditService/ShowcaseLayoutIgnore.styled";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getServiceWebAuditPage], () =>
    adminWebAuditService.getWebAuditServicePage()
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

const WebAuditPage: NextPage = () => {
  const { data } = useQuery([queryKeys.getServiceWebAuditPage], () =>
    adminWebAuditService.getWebAuditServicePage()
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
      <Layout>
        <HeadBlock />
        <WhatIsAuditBlock />
        <WhichProblemBlock />
        <TypesOfAuditBlock />
        {data?.projects ? <ShowcaseLayoutIgnore><ShowCase projects={data?.projects}/></ShowcaseLayoutIgnore>:
        <ShowcaseWithoutDataSpacing/>}
        <HowToDoBlock />
        <ProfessionalAuditBlock />
      </Layout>
      <FooterNew />
    </>
  );
};

export default WebAuditPage;
