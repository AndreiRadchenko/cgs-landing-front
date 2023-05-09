import React, { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import parse, { HTMLReactParserOptions, Element } from "html-react-parser";

import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import { adminGlobalService } from "../../services/adminHomePage";
import PortfolioProjectComponent from "../../components/Portfolio/PortfolioProjectComponent";
import { Loader, LoaderStub } from "../../components/Loader";
import { adminPortfolioService } from "../../services/adminPortfolioPage";
import { CTABlock } from "../../components/Portfolio/CTABlock";
import ScrambleText from "../../components/HomePage/ScrambleText";

import {
  IPortfolioResponse,
  IPortfolioReviewsResponse,
} from "../../types/Admin/AdminPortfolio.types";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/AdminPage";
import * as Styles from "../../styles/Portfolio.styled";
import * as CSS from "../../styles/Portfolio/title.styled";
import { PortfolioPageSize } from "../../consts";
import { Pagination } from "../../components/Portfolio/Pagination";
import longArrow from "../../../public/HomePageDecoration/longArrow.svg";
import { useWindowDimension } from "../../hooks/useWindowDimension";

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
  const { width } = useWindowDimension();
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("color: rgb(88, 105, 221)")
      ) {
        return (
          <span className="blue tech">
            <ScrambleText
              text={
                domNode.children[0].type === "text" &&
                (domNode.children[0] as any).data
              }
            />
          </span>
        );
      } else if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("color: rgb(221, 105, 88)")
      ) {
        return (
          <>
            {width! > 714 && <br />}
            <CSS.ArrowWrapper>
              <Image
                src={longArrow.src}
                alt="wide tech long arrow"
                layout="fill"
                objectFit="contain"
              />
            </CSS.ArrowWrapper>
          </>
        );
      }
    },
  };

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
  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

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
          <Styles.PortfolioContainer>
            <HeaderNavNew />
            <Styles.PortfolioWrapper>
              <CSS.Subtitle>
                {data && parse(data.SubtitleBlock.title, options)}
              </CSS.Subtitle>
              <Styles.PortfolioProjectsContainer>
                {reviewsData?.reviews &&
                  reviewsData.reviews.map((project) => (
                    <PortfolioProjectComponent
                      key={project._id}
                      project={project}
                    />
                  ))}
              </Styles.PortfolioProjectsContainer>
              <Pagination
                reviewsData={reviewsData}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </Styles.PortfolioWrapper>
            <CTABlock initValues={data!.cta} />
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
