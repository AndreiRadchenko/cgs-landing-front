import React from "react";
import parse from "html-react-parser";
import Head from "next/head";
import { NextPage } from "next";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import { adminPortfolioService } from "../../services/adminPortfolioPage";
import { CTABlock } from "../../components/Portfolio/CTABlock";
import PortfolioProjectComponent from "../../components/Portfolio/PortfolioProjectComponent";

import {
  IPortfolioCTAResponse,
  IPortfolioResponse,
  IPortfolioReviewsResponse,
} from "../../types/Admin/AdminPortfolio.types";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/AdminPage";
import * as Styles from "../../styles/Portfolio.styled";
import { adminGlobalService } from "../../services/adminHomePage";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getPortfolioPageData], () =>
    adminPortfolioService.getPageData()
  );

  await queryClient.prefetchQuery([queryKeys.getPortfolio], () =>
    adminPortfolioService.getReviews()
  );

  await queryClient.prefetchQuery([queryKeys.getPortfolioCTA], () =>
    adminPortfolioService.getPortfolioCTA()
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

const PortfolioPage: NextPage = () => {
  const { data, isLoading }: IPortfolioResponse = useQuery(
    [queryKeys.getPortfolioPageData],
    () => adminPortfolioService.getPageData()
  );

  const {
    data: reviews,
    isLoading: reviewsIsLoading,
  }: IPortfolioReviewsResponse = useQuery([queryKeys.getPortfolio], () =>
    adminPortfolioService.getReviews()
  );

  const { data: ctaData, isLoading: ctaDataIsLoading }: IPortfolioCTAResponse =
    useQuery([queryKeys.getPortfolioCTA], () =>
      adminPortfolioService.getPortfolioCTA()
    );

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  return isLoading && reviewsIsLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data ? (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>
      <Styles.PortfolioContainer>
        <HeaderNavNew />
        <Styles.PortfolioWrapper>
          <Styles.PortfolioProjectsContainer>
            {reviews?.map((project) => (
              <PortfolioProjectComponent key={project._id} project={project} />
            ))}
          </Styles.PortfolioProjectsContainer>
          <CTABlock initValues={ctaData!.cta} />
        </Styles.PortfolioWrapper>
        <FooterNew />
      </Styles.PortfolioContainer>
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default PortfolioPage;
