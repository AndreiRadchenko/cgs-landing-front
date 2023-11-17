import React from "react";
import Head from "next/head";
import parse from "html-react-parser";
import { useQuery, dehydrate, QueryClient } from "@tanstack/react-query";

import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import AboutUs from "../../components/AboutUsPage/AboutUs";

import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import { adminAboutUsService } from "../../services/adminAboutUsPage";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getFullHomePage], () =>
    adminGlobalService.getFullPage()
  );

  await queryClient.prefetchQuery([queryKeys.getAboutUsPage], () =>
    adminAboutUsService.getAboutUsPage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const AboutUsPage = () => {
  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const { data } = useQuery([queryKeys.getAboutUsPage], () =>
    adminAboutUsService.getAboutUsPage()
  );

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>
      <HeaderNavNew />
      {data && <AboutUs data={data} />}
      <FooterNew />
    </>
  );
};

export default AboutUsPage;
