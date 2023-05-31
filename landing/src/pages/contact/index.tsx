import React from "react";
import Head from "next/head";
import parse from "html-react-parser";
import { useQuery, dehydrate, QueryClient } from "@tanstack/react-query";

import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import Contact from "../../components/ContactPage/Contact";

import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import { adminContactService } from "../../services/adminContactPage";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getContactPage], () =>
    adminContactService.getContactPage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const ContactPage = () => {
  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const { data } = useQuery([queryKeys.getContactPage], () =>
    adminContactService.getContactPage()
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
      {data && <Contact data={data} />}
      <FooterNew />
    </>
  );
};

export default ContactPage;
