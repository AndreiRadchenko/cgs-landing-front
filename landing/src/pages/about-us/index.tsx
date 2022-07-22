import React from "react";
import parse from "html-react-parser";
import { useQuery, dehydrate, QueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import AboutUs from "../../components/AboutUsPage/AboutUs";
import { adminAboutUsService } from "../../services/adminAboutUsPage";
import Head from "next/head";

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKeys.getAboutUsPage, () =>
    adminAboutUsService.getAboutUsPage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const AboutUsPage = () => {
  useQuery(queryKeys.getFullHomePage, () => adminGlobalService.getFullPage());

  const { data } = useQuery(queryKeys.getAboutUsPage, () =>
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
