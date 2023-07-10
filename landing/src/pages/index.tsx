import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import parse from "html-react-parser";
import Head from "next/head";
import * as StyledCommon from "../styles/Page.styled";

import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../consts/queryKeys";
import { adminGlobalService } from "../services/adminHomePage";
import { IDataResponse } from "../types/Admin/Response.types";
import HeaderNavNew from "../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../components/FooterNew/FooterNew";
import Content from "../components/HomePage/Content";
import CalendlyInfoModal from "../components/Calendly/CalendlyInfoModal";

interface IHomeData {
  data: IDataResponse | undefined;
  isLoading: boolean;
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getFullHomePage], () =>
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
  const [isCalendlySuccessfull, setIsCalendlySuccessfull] = useState(false);
  const { data, isLoading }: IHomeData = useQuery(
    [queryKeys.getFullHomePage],
    () => adminGlobalService.getFullPage()
  );

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  useEffect(() => {
    const calendlyStatusFinder = (e: any) => {
      window.dataLayer = window.dataLayer || [];

      if (
        e.data.event &&
        e.data.event.indexOf("calendly") === 0 &&
        e.data.event === "calendly.event_scheduled"
      ) {
        setIsCalendlySuccessfull(true);
      }
    };

    window.addEventListener("message", calendlyStatusFinder);

    return () => {
      window.removeEventListener("message", calendlyStatusFinder);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <StyledCommon.Loading>LOADING...</StyledCommon.Loading>
      ) : (
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
          <Content />
          <FooterNew className="mobileDissapear" />
        </>
      )}
    </>
  );
};

export default Home;
