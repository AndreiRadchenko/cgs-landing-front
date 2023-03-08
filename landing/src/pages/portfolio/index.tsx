import React from "react";
import parse from "html-react-parser";
import Head from "next/head";
import { NextPage } from "next";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminPortfolioService } from "../../services/adminPortfolioPage";
import PortfolioSlider from "../../components/Admin/PortfolioSwipers/PortfolioSlider";
import { CTABlock } from "../../components/Portfolio/CTABlock";
import {
  IPortfolioResponse,
  IPortfolioReviewsResponse,
} from "../../types/Admin/AdminPortfolio.types";
import * as Styled from "../../styles/AdminPage";
import * as Styles from "../../styles/Portfolio.styled";
import { Separator } from "../../styles/PortfolioSlider.styled";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { adminGlobalService } from "../../services/adminHomePage";

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

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const { width } = useWindowDimension();
  const sortByCategory = (category: string) => {
    return (
      reviews &&
      reviews.filter((review) => review.category === category).reverse()
    );
  };

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  const isMobile = !!(width && width < 767);

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
        {isMobile || (
          <>
            <Styles.OurWorkTitle>
              <span>
                &nbsp;OUR WORK&nbsp;&nbsp;OUR WORK&nbsp;&nbsp;OUR
                WORK&nbsp;&nbsp;OUR WORK&nbsp;&nbsp;OUR WORK&nbsp;&nbsp;OUR
                WORK&nbsp;&nbsp;WORK OUR&nbsp;&nbsp;WORK OUR WORK&nbsp;
              </span>
              <span>
                OUR WORK&nbsp;&nbsp;OUR WORK&nbsp;&nbsp;OUR WORK&nbsp;&nbsp;OUR
                WORK&nbsp;&nbsp;OUR WORK&nbsp;&nbsp;OUR WORK&nbsp;&nbsp;WORK
                OUR&nbsp;&nbsp;WORK OUR WORK&nbsp;
              </span>
            </Styles.OurWorkTitle>
          </>
        )}
        <Styles.SlidersCont>
          {data.categories.map((category, ind) => {
            const filtered = sortByCategory(category);
            return (
              filtered &&
              filtered.length > 0 && (
                <PortfolioSlider
                  key={ind}
                  reviews={filtered}
                  category={category}
                  isMobile={isMobile}
                />
              )
            );
          })}
          <Separator color={"#8f8e93"} className="bottom" />
        </Styles.SlidersCont>
        <CTABlock />
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
