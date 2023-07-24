import React, { useEffect, useState } from "react";
import Head from "next/head";
import parse from "html-react-parser";
import { useQuery, dehydrate, QueryClient } from "@tanstack/react-query";

import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import Contact from "../../components/ContactPage/Contact";
import CalendlyInfoModal from "../../components/Calendly/CalendlyInfoModal";

import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import { adminContactService } from "../../services/adminContactPage";
import { calendlyPopupInfoHandler } from "../../utils/calendlyPopupInfoHandler";

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
  const [isCalendlySuccessfull, setIsCalendlySuccessfull] = useState(false);
  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const { data } = useQuery([queryKeys.getContactPage], () =>
    adminContactService.getContactPage()
  );

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  calendlyPopupInfoHandler(() => setIsCalendlySuccessfull(true));

  return (
    <>
      {isCalendlySuccessfull && (
        <CalendlyInfoModal
          isOpen={isCalendlySuccessfull}
          setIsCalendlySuccessfull={setIsCalendlySuccessfull}
        />
      )}
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
