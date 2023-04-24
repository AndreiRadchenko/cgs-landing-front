import React from "react";
import parse from "html-react-parser";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import Head from "next/head";
import { adminMobileAuditService } from "../../services/services/adminServiceMobileAuditPage";
import { adminGlobalService } from "../../services/adminHomePage";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeadBlock from "../../components/MobileAuditService/HeadBlock";
import WhatAppBlock from "../../components/MobileAuditService/WhatAppBlock";
import WhatAppIncludeBlock from "../../components/MobileAuditService/WhatAppIncludeBlock";
import WhenDoYouNeedBlock from "../../components/MobileAuditService/WhenDoYouNeedBlock";
import ShowCase from "../../components/ShowCase";
import FooterBlock from "../../components/MobileAuditService/FooterBlock";
import * as Styled from "../../styles/MobileAuditService/Layout";
import { Layout, PageArticle } from "../../styles/Layout.styled";
import HowDoWeAuditBlock from "../../components/MobileAuditService/HowDoWeAuditBlock";

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
  const { data } = useQuery([queryKeys.getServiceMobileAuditPage], () =>
    adminMobileAuditService.getMobileAuditServicePage()
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
            <WhatAppBlock />
            <WhatAppIncludeBlock />
            <WhenDoYouNeedBlock withoutShowcase={data?.projects.length === 0} />
          </Styled.Layout>
        </Layout>
        <ShowCase projects={data?.projects} />
        <Layout>
          <Styled.Layout>
            <HowDoWeAuditBlock />
            <FooterBlock />
          </Styled.Layout>
        </Layout>
      </PageArticle>
      <FooterNew />
    </>
  );
};

export default MobileAuditService;
