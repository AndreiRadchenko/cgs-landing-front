import React, { useState } from "react";
import parse from "html-react-parser";
import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useMediaQuery } from "@mui/material";

import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeadBlock from "../../components/OngoingSupport/HeadBlockSupport";
import WorkBlock from "../../components/OngoingSupport/WorkBlock";
import ProvidesBlock from "../../components/OngoingSupport/ProvidesBlock";
import FooterBlock from "../../components/OngoingSupport/FooterBlockSupport";
import ShowCase from "../../components/ShowCase";
import BonusesComponent from "../../components/ServisesComponents/Bonuses/Component/BonusesComponent";
import CalendlyInfoModal from "../../components/Calendly/CalendlyInfoModal";
import OtherServices from "../../components/ServisesComponents/OtherServices/Component/OtherServices";
import TeamMembers from "../../components/ServisesComponents/TeamMembers/TeamMembersComponent";
import { Loader, LoaderStub } from "../../components/Loader";

import * as Styled from "../../styles/OngoingSupport/Layout";
import { Layout, PageArticle } from "../../styles/Layout.styled";

import { queryKeys } from "../../consts/queryKeys";

import { adminSupportService } from "../../services/services/adminServiceSupportPage";
import { adminGlobalService } from "../../services/adminHomePage";

import { calendlyPopupInfoHandler } from "../../utils/calendlyPopupInfoHandler";
import { useCalendlyEventListener } from "react-calendly";
import { useGetCelendlyMeetingData } from "../../hooks/useGetCelendlyMeetingData";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getServiceSupportPage], () =>
    adminSupportService.getSupportServicePage()
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

const OngoingSupport = () => {
  const is768px = useMediaQuery("(max-width:768px)");

  const { data, isLoading } = useQuery([queryKeys.getServiceSupportPage], () =>
    adminSupportService.getSupportServicePage()
  );
  const [isCalendlySuccessfull, setIsCalendlySuccessfull] = useState(false);

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const { customHead, metaDescription, metaTitle } = { ...data?.meta };

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
          <PageArticle>
            <Layout>
              <Styled.Layout>
                <HeadBlock />
                <WorkBlock />
                <ProvidesBlock
                  className={
                    data && data.projects.length === 0
                      ? "withoutShowcase"
                      : undefined
                  }
                />
              </Styled.Layout>
              <BonusesComponent bonuses={data?.bonuses} />
            </Layout>
            <div
              style={{
                marginBottom: is768px ? "0em" : "-17.1em",
                marginTop: is768px ? "-1.8em" : "0em",
              }}
            >
              <ShowCase projects={data?.projects} />
            </div>
            <Layout>
              <TeamMembers
                teamMembers={data?.teamMembers}
                className={"supportTeam"}
              />
              <OtherServices otherServices={data?.otherServices} />
              <Styled.Layout>
                <FooterBlock />
              </Styled.Layout>
            </Layout>
          </PageArticle>
          <FooterNew />
        </>
      )}
    </Loader>
  );
};

export default OngoingSupport;
