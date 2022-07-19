import React from "react";
import parse from "html-react-parser";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Faq from "../../components/Faq";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import { queryKeys } from "../../consts/queryKeys";
import { adminFaqService } from "../../services/adminFaqPage";
import { adminGlobalService } from "../../services/adminHomePage";
import Head from "next/head";

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKeys.getFaqPage, () =>
    adminFaqService.getFaqPage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const FaqPage = () => {
  const { data } = useQuery(queryKeys.getFaqPage, () =>
    adminFaqService.getFaqPage()
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
      {data?.questions && <Faq questions={data.questions} />}
      <FooterNew />
    </>
  );
};

export default FaqPage;
