import React, { useCallback } from "react";

import * as Styles from "../../styles/Portfolio.styled";
import { IPaginationProps } from "../../types/Admin/AdminPortfolio.types";

export const Pagination = ({
  reviewsData,
  currentPage,
  setCurrentPage,
}: IPaginationProps) => {
  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handlePageClick = useCallback(
    (pageNumber: number) => {
      if (pageNumber + 1 !== currentPage) {
        handleClick(pageNumber + 1);
      }
    },
    [handleClick, currentPage]
  );

  return (
    <Styles.PortfolioPaginationWrapper>
      <Styles.PortfolioPaginationItemsWrapper>
        {reviewsData &&
          Array.from(Array(reviewsData.totalPages).keys()).map((pageNumber) => (
            <Styles.PortfolioPaginationButton
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              className={pageNumber + 1 === currentPage ? "active" : ""}
            >
              {pageNumber + 1}
            </Styles.PortfolioPaginationButton>
          ))}
      </Styles.PortfolioPaginationItemsWrapper>
    </Styles.PortfolioPaginationWrapper>
  );
};

/*
На початку роботи цього коду ми знаходимось на першій сторінці пагінації. Нажавши на кнопку "2", нас перемістить на другу сторінку пагінації та, за допомогою хука "useScrollTo", перемістить до блоку "Styles.PortfolioContainer". Чому, після всіх цих дій, при повторному нажиманні на першу сторінку, повторного скролу до цього блоку не відбувається ?

Ось код:
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
import { CTABlock } from "../../components/Portfolio/CTABlock";

import {
  IPortfolioCTAResponse,
  IPortfolioResponse,
  IPortfolioReviewsResponse,
} from "../../types/Admin/AdminPortfolio.types";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/AdminPage";
import * as Styles from "../../styles/Portfolio.styled";
import { PortfolioPageSize } from "../../consts";
import { Pagination } from "../../components/Portfolio/Pagination";

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

  const { data: ctaData, isLoading: ctaDataIsLoading }: IPortfolioCTAResponse =
    useQuery([queryKeys.getPortfolioCTA], () =>
      adminPortfolioService.getPortfolioCTA()
    );

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
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
  console.log("Ref: ", ref.current);

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
            <CTABlock initValues={ctaData!.cta} />
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
*/
