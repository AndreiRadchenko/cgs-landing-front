import React, { useEffect, useRef, useState } from "react";
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
import { Pagination } from "../../components/Portfolio/Pagination";
import BlogDropdown from "../../components/Blog/BlogDropdown";
import { useWindowDimension } from "../../hooks/useWindowDimension";

import {
  IPortfolioResponse,
  IPortfolioReviewsResponse,
} from "../../types/Admin/AdminPortfolio.types";
import { queryKeys } from "../../consts/queryKeys";
import { PortfolioPageSize } from "../../consts";
import * as Styled from "../../styles/AdminPage";
import * as Styles from "../../styles/Portfolio.styled";
import * as CSS from "../../styles/Portfolio/title.styled";
import longArrow from "../../../public/HomePageDecoration/longArrow.svg";
import * as Style from "../../styles/Blog.styled";

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
                objectFit="none"
                objectPosition="right"
              />
            </CSS.ArrowWrapper>
          </>
        );
      }
    },
  };

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [category, setCategory] = useState<string>("");
  const [isRequestRepeated, setIsRequestRepeated] = useState<boolean>(false);
  const [isSearchTriggered, setIsSearchTriggered] = useState<boolean>(false);
  const [isCategoryWarning, setIsCategoryWarning] = useState<boolean>(false);
  const [industries, setIndustries] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [searchTrigger, setSearchTrigger] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const { data, isLoading }: IPortfolioResponse = useQuery(
    [queryKeys.getPortfolioPageData],
    () => adminPortfolioService.getPageData()
  );

  const {
    data: reviewsData,
    isLoading: reviewsIsLoading,
  }: IPortfolioReviewsResponse = useQuery(
    [
      queryKeys.getPortfolio,
      currentPage,
      industries,
      category,
      PortfolioPageSize,
      searchTrigger,
    ],
    () =>
      adminPortfolioService.getPaginatedAndFilteredReviews(
        category,
        industries,
        searchTrigger,
        currentPage,
        PortfolioPageSize
      )
  );

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  const handleSearchChange = (e: any) => {
    setIsSearchTriggered(true);
    setSearchText(e.target.value);
  };

  const handleSearchRequest = () => {
    setSearchTrigger(searchText);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleSearchRequest();
    }
  };

  // useEffect(() => {
  //   reviewsData?.reviews.length === 0
  //     ? setIsCategoryWarning(true)
  //     : setIsCategoryWarning(false);
  // }, [activeCategory]);

  useEffect(() => {
    setIsRequestRepeated(false);
    if (
      reviewsData?.reviews.length === 0 &&
      (category || industries.length > 0) &&
      activeCategory &&
      isSearchTriggered
    ) {
      setCategory("");
      setActiveCategory(0);
      setIndustries([]);
      setIsSearchTriggered(false);
      setIsRequestRepeated(true);
    }
  }, [reviewsData]);

  // useEffect(() => {
  //   console.log("Trigger: ", searchTrigger);
  // }, [searchTrigger]);

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  useEffect(() => {
    setCurrentPage(1);
  }, [industries.length, searchTrigger, category]);

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
              <Styles.PortfolioCategoryWrapper>
                <Styles.PortfolioCategoryItem
                  className={activeCategory === 0 ? "active" : ""}
                  onClick={() => {
                    setIsSearchTriggered(false);
                    setActiveCategory(0);
                    setCategory("");
                  }}
                >
                  {"All projects"}
                </Styles.PortfolioCategoryItem>
                {data.categories.map((elem, i) => (
                  <Styles.PortfolioCategoryItem
                    className={i + 1 === activeCategory ? "active" : ""}
                    onClick={() => {
                      setIsSearchTriggered(false);
                      setActiveCategory(i + 1);
                      setCategory(elem);
                    }}
                  >
                    {elem.charAt(0).toUpperCase() + elem.slice(1)}
                  </Styles.PortfolioCategoryItem>
                ))}
              </Styles.PortfolioCategoryWrapper>
              <Styles.PortfolioFiltersWrapper>
                <Styles.PortfolioSearchWrapper>
                  <Styles.PortfolioSearch>
                    <Styles.PortfolioInputWrapper>
                      <input
                        type="text"
                        value={searchText}
                        placeholder="Search work"
                        onChange={handleSearchChange}
                        onKeyDown={handleKeyDown}
                      />
                    </Styles.PortfolioInputWrapper>
                    <Styles.PortfolioSearchButton onClick={handleSearchRequest}>
                      <Styles.PortfolioSearchIcon />
                    </Styles.PortfolioSearchButton>
                  </Styles.PortfolioSearch>
                  {/* {isCategoryWarning && <div>Test Error</div>} */}
                </Styles.PortfolioSearchWrapper>
                <Style.DropdownContainer>
                  <>
                    {industries.length > 0 &&
                      industries.map((filter, index) => (
                        <Style.Tag key={index}>
                          {filter}&nbsp;&nbsp;
                          <span
                            onClick={() => {
                              const newIndustries = industries.filter(
                                (filter) => filter !== industries[index]
                              );
                              setIndustries([...newIndustries]);
                            }}
                          >
                            x
                          </span>
                        </Style.Tag>
                      ))}
                  </>
                  <BlogDropdown
                    className="blog"
                    filters={industries}
                    setFilters={setIndustries}
                    tags={data.industries}
                    dropdownName="INDUSTRY"
                    // dropdownName="// INDUSTRY"
                    isTag={true}
                  />
                </Style.DropdownContainer>
              </Styles.PortfolioFiltersWrapper>
              {
                reviewsData?.reviews && reviewsData.reviews.length > 0 && (
                  // !isRequestRepeated ? (
                  <>
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
                  </>
                )
                // ) : (
                //   <div>Something</div>
                // )
              }
            </Styles.PortfolioWrapper>
            <CTABlock initValues={data.cta} />
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

export default PortfolioPage;
