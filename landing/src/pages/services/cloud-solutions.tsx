import React from "react";
import parse from "html-react-parser";
import { useQuery } from "react-query";
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
import * as Styled from "../../styles/CloudService/Layaut";
import { Layout } from "../../styles/Layout.styled";
import ShowCase from "../../components/ShowCase";

const CloudService = () => {
  const { data } = useQuery(queryKeys.getServiceCloudPage, () =>
    adminCloudService.getCloudSolutionPage()
  );

  useQuery(queryKeys.getFullHomePage, () => adminGlobalService.getFullPage());

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
          <ProvidesBlock />
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
