import React, { useCallback, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import parse from "html-react-parser";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import { adminGlobalService } from "../../services/adminHomePage";
import PortfolioProjectComponent from "../../components/Portfolio/PortfolioProjectComponent";
import { useScrollTo } from "../../hooks/useScrollTo";
import { Loader, LoaderStub } from "../../components/Loader";
import { adminPortfolioService } from "../../services/adminPortfolioPage";

import { queryKeys } from "../../consts/queryKeys";
import {
  IPortfolioResponse,
  IPortfolioReviewsResponse,
} from "../../types/Admin/AdminPortfolio.types";
import * as Styled from "../../styles/AdminPage";
import * as Styles from "../../styles/Portfolio.styled";
import { PortfolioPageSize } from "../../consts";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getPortfolioPageData], () =>
    adminPortfolioService.getPageData()
  );

  await queryClient.prefetchQuery([queryKeys.getPortfolio], () =>
    adminPortfolioService.getReviews()
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
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading }: IPortfolioResponse = useQuery(
    [queryKeys.getPortfolioPageData],
    () => adminPortfolioService.getPageData()
  );

  const {
    data: reviewsData,
    isLoading: reviewsIsLoading,
  }: IPortfolioReviewsResponse = useQuery(
    [queryKeys.getPortfolio, currentPage, PortfolioPageSize],
    () =>
      adminPortfolioService.getPaginatedReviews(currentPage, PortfolioPageSize)
  );
  const [ref, scrollHandler] = useScrollTo<HTMLDivElement>();
  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  const handleClick = async (pageNumber: number) => {
    await setCurrentPage(pageNumber);
    scrollHandler();
  };

  const handlePageClick = useCallback(
    (pageNumber: number) => {
      if (pageNumber + 1 !== currentPage) {
        handleClick(pageNumber + 1);
      }
    },
    [handleClick, currentPage]
  );

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  return (
    <Loader active={isLoading || reviewsIsLoading}>
      {isLoading || reviewsIsLoading ? (
        <LoaderStub />
      ) : data ? (
        <>
          <Head>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            {customHead && parse(customHead)}
          </Head>
          <Styles.PortfolioContainer ref={ref}>
            <HeaderNavNew />
            <Styles.PortfolioWrapper>
              <Styles.PortfolioProjectsContainer>
                {reviewsData?.reviews &&
                  reviewsData.reviews.map((project) => (
                    <PortfolioProjectComponent
                      key={project._id}
                      project={project}
                    />
                  ))}
              </Styles.PortfolioProjectsContainer>
              <Styles.PortfolioPaginationWrapper>
                <Styles.PortfolioPaginationItemsWrapper>
                  {reviewsData &&
                    Array.from(Array(reviewsData.totalPages).keys()).map(
                      (pageNumber) => (
                        <Styles.PortfolioPaginationButton
                          key={pageNumber}
                          onClick={() => handlePageClick(pageNumber)}
                          className={
                            pageNumber + 1 === currentPage ? "active" : ""
                          }
                        >
                          {pageNumber + 1}
                        </Styles.PortfolioPaginationButton>
                      )
                    )}
                </Styles.PortfolioPaginationItemsWrapper>
              </Styles.PortfolioPaginationWrapper>
            </Styles.PortfolioWrapper>
            <FooterNew />
          </Styles.PortfolioContainer>
        </>
      ) : (
        <Styled.AdminUnauthorizedModal>
          Something went wrong :(
        </Styled.AdminUnauthorizedModal>
      )}
    </Loader>
  );
};

export default PortfolioPage;
