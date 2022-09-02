import React from "react";
import { NextPage } from "next";
import parse from "html-react-parser";
import { useQuery, QueryClient, dehydrate } from "react-query";
import * as Styled from "../../styles/DbService/Layout";
import Head from "next/head";
import HeadBlock from "../../components/DbService/HeadBlock";
import ExpertiseBlock from "../../components/DbService/ExpertiseBlock";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import { adminDbService } from "../../services/services/adminServicesDbPage";
import SelectBlock from "../../components/DbService/SelectBlock";
import FeaturesBlock from "../../components/DbService/FeaturesBlock";
import FooterBlock from "../../components/DbService/FooterBlock";
import { Layout } from "../../styles/Layout.styled";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKeys.getServiceDbPage, () =>
    adminDbService.getDbServicePage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const DbSolutions: NextPage = () => {
  const { data } = useQuery(queryKeys.getServiceDbPage, () =>
    adminDbService.getDbServicePage()
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
          <ExpertiseBlock />
          <SelectBlock />
          <FeaturesBlock />
          <FooterBlock />
        </Styled.Layout>
      </Layout>
      <FooterNew />
    </>
  );
};

export default DbSolutions;
