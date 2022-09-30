import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminPortfolioService } from "../../services/adminPortfolioPage";
import PortfolioSlider from "../../components/Admin/PortfolioSwipers/PortfolioSlider";
import {
  IPortfolioResponse,
  IPortfolioReviewsResponse,
} from "../../types/Admin/AdminPortfolio.types";
import * as Styled from "../../styles/AdminPage";
import * as Styles from "../../styles/Portfolio.styled";
import { Separator } from "../../styles/PortfolioSlider.styled";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { adminGlobalService } from "../../services/adminHomePage";
import Head from "next/head";
import { NextPage } from "next";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKeys.getPortfolioPageData, () =>
    adminPortfolioService.getPageData()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const PortfolioPage: NextPage = () => {
  const { data, isLoading }: IPortfolioResponse = useQuery(
    queryKeys.getPortfolioPageData,
    () => adminPortfolioService.getPageData()
  );

  const {
    data: reviews,
    isLoading: reviewsIsLoading,
  }: IPortfolioReviewsResponse = useQuery(queryKeys.getPortfolio, () =>
    adminPortfolioService.getReviews()
  );

  useQuery(queryKeys.getFullHomePage, () => adminGlobalService.getFullPage());

  const [isMobile, setIsMobile] = useState(false);
  const { width } = useWindowDimension();
  const sortByCategory = (category: string) => {
    return (
      reviews &&
      reviews.filter((review) => review.category === category).reverse()
    );
  };
  useEffect(() => {
    setIsMobile(false);
    if (width && width < 768) {
      setIsMobile(true);
    }
  }, [width]);

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
        {isMobile || (
          <>
            <Styles.OurWorkTitle>
              <span>
                &nbsp;OUR WORK&nbsp;&nbsp;OUR WORK&nbsp;&nbsp;OUR
                WORK&nbsp;&nbsp;OUR WORK&nbsp;&nbsp;OUR WORK&nbsp;&nbsp;OUR
                WORK&nbsp;&nbsp;WORK OUR&nbsp;&nbsp;WORK OUR WORK
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
