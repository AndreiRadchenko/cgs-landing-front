import React from "react";
import Head from "next/head";
import parse from "html-react-parser";
import { NextPage } from "next";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import Careers from "../../components/Careers";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";

import { AdminUnauthorizedModal } from "../../styles/AdminPage";
import { adminGlobalService } from "../../services/adminHomePage";

import { queryKeys } from "../../consts/queryKeys";
import { CareersProps } from "../../types/Admin/Admin.types";
import { adminCareersService } from "../../services/adminCareersPage";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getCareerPage], () =>
    adminCareersService.getCareersPage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const CarrersPage: NextPage = () => {
  const { data, isLoading }: CareersProps = useQuery(
    [queryKeys.getCareerPage],
    () => adminCareersService.getCareersPage()
  );

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  return !isLoading && data ? (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>
      <HeaderNavNew />
      <Careers data={data} />
      <FooterNew />
    </>
  ) : (
    <AdminUnauthorizedModal>Loading...</AdminUnauthorizedModal>
  );
};

export default CarrersPage;
