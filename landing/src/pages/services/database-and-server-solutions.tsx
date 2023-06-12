import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import parse from "html-react-parser";
import { useQuery, QueryClient, dehydrate } from "@tanstack/react-query";
import Head from "next/head";

import HeadBlock from "../../components/DbService/HeadBlock";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import { adminGlobalService } from "../../services/adminHomePage";
import { adminDbService } from "../../services/services/adminServicesDbPage";
import { adminPortfolioService } from "../../services/adminPortfolioPage";
import SelectBlock from "../../components/DbService/SelectBlock";
import FeaturesBlock from "../../components/DbService/FeaturesBlock";
import FooterBlock from "../../components/DbService/FooterBlock";
import ShowCase from "../../components/ShowCase";
import {
  BonusesComponent,
  OtherServices,
} from "../../components/ServisesComponents";
import CalendlyInfoModal from "../../components/Calendly/CalendlyInfoModal";
import { Loader, LoaderStub } from "../../components/Loader";

import * as Styled from "../../styles/DbService/Layout";
import { Layout, PageArticle } from "../../styles/Layout.styled";
import { queryKeys } from "../../consts/queryKeys";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getServiceDbPage], () =>
    adminDbService.getDbServicePage()
  );

  await queryClient.prefetchQuery([queryKeys.getFullHomePage], () =>
    adminGlobalService.getFullPage()
  );

  await queryClient.prefetchQuery([queryKeys.getPortfolio], () =>
    adminPortfolioService.getReviews()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const DbSolutions: NextPage = () => {
  const [isFirstImageLoaded, setIsFirstImageLoaded] = useState(false);

  const { data, isLoading } = useQuery([queryKeys.getServiceDbPage], () =>
    adminDbService.getDbServicePage()
  );
  const [isCalendlySuccessfull, setIsCalendlySuccessfull] = useState(false);

  // useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());
  // useQuery([queryKeys.getPortfolio], () => adminPortfolioService.getReviews());

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
    <Loader active={false}>
      {isLoading ? (
        <LoaderStub />
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
          <PageArticle>
            <Layout>
              <Styled.Layout>
                <HeadBlock />
                <FeaturesBlock />
                <SelectBlock
                  className={
                    data && data.projects.length === 0
                      ? "withoutServices"
                      : undefined
                  }
                />
              </Styled.Layout>
            </Layout>
            <ShowCase
              setIsFirstImageLoaded={setIsFirstImageLoaded}
              projects={data?.projects}
            />
            <Styled.BonusesAlign />
            <Layout>
              <BonusesComponent bonuses={data?.bonuses} />
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

export default DbSolutions;
