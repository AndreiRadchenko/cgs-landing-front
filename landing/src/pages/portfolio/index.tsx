import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminPortfolioPageService } from "../../services/adminPortfolioPage";
import PortfolioSlider from "../../components/Admin/PortfolioSwipers/PortfolioSlider";
import { IPortfolioResponse } from "../../types/Admin/AdminPortfolioPage.types";
import * as Styled from "../../styles/AdminPage";
import * as Styles from "../../styles/Portfolio.styled";
import { Separator } from "../../styles/PortfolioSlider.styled";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { adminGlobalService } from "../../services/adminHomePage";
import { portfolioCategories } from "../../utils/variables";
import Head from "next/head";
import { NextPage } from "next";

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKeys.getPortfolioPage, () =>
    adminPortfolioPageService.getPortfolio()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const PortfolioPage: NextPage = () => {
  const { data, isLoading }: IPortfolioResponse = useQuery(
    queryKeys.getPortfolioPage,
    () => adminPortfolioPageService.getPortfolio()
  );

  useQuery(queryKeys.getFullHomePage, () => adminGlobalService.getFullPage());

  const [isMobile, setIsMobile] = useState(false);
  const { width } = useWindowDimension();
  const sortByCategory = (category: string) => {
    return data?.reviews.filter((review) => review.category === category);
  };
  useEffect(() => {
    setIsMobile(false);
    if (width && width <= 768) {
      setIsMobile(true);
    }
  }, [width]);

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  return isLoading ? (
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
          <Styles.OurWorkTitle>
            UR WORK OUR WORK OUR WORK OUR WORK OUR WORK OUR WORK WORK OUR WORK
            OUR WORK
          </Styles.OurWorkTitle>
        )}
        <Styles.SlidersCont>
          {portfolioCategories.map((category, ind) => (
            <PortfolioSlider
              key={ind}
              reviews={sortByCategory(category)}
              category={category}
              isMobile={isMobile}
            />
          ))}
          <Separator color={"#8f8e93"} />
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
