import React, { useState } from "react";
import { NextPage } from "next";
import parse from "html-react-parser";
import {
  dehydrate,
  QueryClient,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import Head from "next/head";

import HeadBlock from "../../components/MobileService/HeadBlockMobileDev";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import StrongBlock from "../../components/MobileService/StrongBlock";
import WhoNeedAppBlock from "../../components/MobileService/WhoNeedAppBlock";
import HowDoWeWork from "../../components/MobileService/HowDoWeWork";
import FooterBlock from "../../components/MobileService/FooterBlockMobileDev";
import ShowCase from "../../components/ShowCase";
import TeamMembers from "../../components/ServisesComponents/TeamMembers/TeamMembersComponent";
import CalendlyInfoModal from "../../components/Calendly/CalendlyInfoModal";
import PerksOfCoopComponent from "../../components/ServisesComponents/PerksOfCoopComponent";
import { Loader, LoaderStub } from "../../components/Loader";

import * as Styled from "../../styles/WebService/Layout";
import { Layout } from "../../styles/Layout.styled";

import { IServiceMobile } from "../../types/Admin/Response.types";

import { queryKeys } from "../../consts/queryKeys";

import { adminGlobalService } from "../../services/adminHomePage";
import { adminMobileService } from "../../services/services/adminServicesMobilePage";

import { calendlyPopupInfoHandler } from "../../utils/calendlyPopupInfoHandler";
import { useCalendlyEventListener } from "react-calendly";
import { useGetCelendlyMeetingData } from "../../hooks/useGetCelendlyMeetingData";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getServiceMobilePage], () =>
    adminMobileService.getMobileServicePage()
  );

  await queryClient.prefetchQuery([queryKeys.getFullHomePage], () =>
    adminGlobalService.getFullPage()
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
const MobileAppDevelopment: NextPage = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery([queryKeys.getServiceMobilePage], () =>
    adminMobileService.getMobileServicePage()
  );

  const dataPerks = queryClient.getQueryData<IServiceMobile>([
    queryKeys.getServiceMobilePage,
  ])?.worthBlock;

  const [isCalendlySuccessfull, setIsCalendlySuccessfull] = useState(false);
  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());
  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  calendlyPopupInfoHandler(() => setIsCalendlySuccessfull(true));

  const { dateTime, joinLink } = useGetCelendlyMeetingData();

  return (
    <Loader active={isLoading}>
      {isLoading ? (
        <LoaderStub />
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
          <>
            <Layout>
              <Styled.Layout>
                <HeadBlock />
              </Styled.Layout>
              {dataPerks && (
                <PerksOfCoopComponent className="mobileDev" data={dataPerks} />
              )}
              <StrongBlock />
              <WhoNeedAppBlock
                className={`${
                  data && data.projects.length === 0
                    ? "withoutShowcase"
                    : undefined
                } mobileDev`}
              />
              <TeamMembers
                className="mobileDev"
                teamMembers={data?.teamMembers}
              />
            </Layout>
            <ShowCase projects={data?.projects} />
            <Layout>
              <HowDoWeWork />
              <FooterBlock />
            </Layout>
          </>
          <FooterNew />
        </>
      )}
    </Loader>
  );
};
export default MobileAppDevelopment;
