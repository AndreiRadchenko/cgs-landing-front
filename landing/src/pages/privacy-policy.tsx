import React from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import Head from "next/head";
import parse from "html-react-parser";

import FooterNew from "../components/FooterNew/FooterNew";
import HeaderNavNew from "../components/HeaderNavNew/HeaderNavNew";
import { queryKeys } from "../consts/queryKeys";
import { adminGlobalService } from "../services/adminHomePage";
import { adminPrivacyService } from "../services/adminPolicyPage";
import PrivacyContent from "../components/Privacy/PrivacyContent";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getPrivacyPage], () =>
    adminPrivacyService.getPolicyPage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const PrivacyPolicyPage: NextPage = () => {
  const { data } = useQuery([queryKeys.getPrivacyPage], () =>
    adminPrivacyService.getPolicyPage()
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
      <PrivacyContent />
      <FooterNew />
    </>
  );
};

export default PrivacyPolicyPage;
