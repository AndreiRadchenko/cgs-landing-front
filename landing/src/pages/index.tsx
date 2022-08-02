import React from "react";
import type { NextPage } from "next";
import parse from "html-react-parser";
import Head from "next/head";
import * as StyledCommon from "../styles/Page.styled";

import { dehydrate, QueryClient, useQuery } from "react-query";
import { queryKeys } from "../consts/queryKeys";
import { adminGlobalService } from "../services/adminHomePage";
import { IDataResponse } from "../types/Admin/Response.types";
import HeaderNavNew from "../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../components/FooterNew/FooterNew";
import Content from "../components/HomePage/Content";
interface IHomeData {
  data: IDataResponse | undefined;
  isLoading: boolean;
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKeys.getFullHomePage, () =>
    adminGlobalService.getFullPage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

interface IHomeData {
  data: IDataResponse | undefined;
  isLoading: boolean;
}

const Home: NextPage = () => {
  const { data, isLoading }: IHomeData = useQuery(
    queryKeys.getFullHomePage,
    () => adminGlobalService.getFullPage()
  );
  useQuery(queryKeys.getPortfolio, () => adminGlobalService.getPortfolio());

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  return (
    <>
      {isLoading ? (
        <StyledCommon.Loading>LOADING...</StyledCommon.Loading>
      ) : (
        <>
          <Head>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            {customHead && parse(customHead)}
          </Head>
          <HeaderNavNew />
          <Content />
          <FooterNew />
        </>
      )}
    </>
  );
};

export default Home;
