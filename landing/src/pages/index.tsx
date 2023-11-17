import React, { useState } from "react";
import type { NextPage } from "next";
import parse from "html-react-parser";
import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useMediaQuery } from "@mui/material";

import HeaderNavNew from "../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../components/FooterNew/FooterNew";
import Content from "../components/HomePage/Content";
import CalendlyInfoModal from "../components/Calendly/CalendlyInfoModal";

import * as StyledCommon from "../styles/Page.styled";
import { queryKeys } from "../consts/queryKeys";
import { adminGlobalService } from "../services/adminHomePage";
import { IDataResponse } from "../types/Admin/Response.types";

import { calendlyPopupInfoHandler } from "../utils/calendlyPopupInfoHandler";
import { useGetCelendlyMeetingData } from "../hooks/useGetCelendlyMeetingData";

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
  const isMobile = useMediaQuery("(max-width:768px)");
  const [isCalendlySuccessfull, setIsCalendlySuccessfull] = useState(false);

  const { data, isLoading }: IHomeData = useQuery(
    [queryKeys.getFullHomePage],
    () => adminGlobalService.getFullPage()
  );

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  calendlyPopupInfoHandler(() => setIsCalendlySuccessfull(true));

  const { dateTime, joinLink } = useGetCelendlyMeetingData();

  return (
    <>
      {isLoading ? (
        <StyledCommon.Loading>LOADING...</StyledCommon.Loading>
      ) : (
        <>
          {isCalendlySuccessfull && (
            <CalendlyInfoModal
              celendlyUri={joinLink}
              dateTime={dateTime}
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
          {!isMobile ? (
            <FooterNew className="mobileDissapear" />
          ) : (
            <div style={{ height: "65px" }}></div>
          )}
        </>
      )}
    </>
  );
};

export default Home;
