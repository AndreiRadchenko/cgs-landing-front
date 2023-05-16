import React, { useEffect, useState } from "react";
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
import { useWindowDimension } from "../../hooks/useWindowDimension";
import Dropdown from "../../utils/Select/Dropdown";

import {
  IPortfolioResponse,
  IPortfolioReviewsResponse,
} from "../../types/Admin/AdminPortfolio.types";
import { queryKeys } from "../../consts/queryKeys";
import { PortfolioPageSize } from "../../consts";
import * as Styled from "../../styles/AdminPage";
import * as Styles from "../../styles/Portfolio.styled";
import * as CSS from "../../styles/Portfolio/title.styled";
import { Tag, DropdownContainer } from "../../styles/HomePage/General.styled";
import longArrow from "../../../public/HomePageDecoration/longArrow.svg";

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
                objectFit="cover"
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
  const [isCategoryChange, setIsCategoryChange] = useState<boolean>(false);
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

  useEffect(() => {
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

    if (reviewsData?.reviews.length === 0 && category && isCategoryChange) {
      setIsCategoryWarning(true);
    } else {
      setIsCategoryWarning(false);
    }
  }, [reviewsData]);

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
                    setIsRequestRepeated(false);
                    setIsCategoryChange(true);
                    setIsSearchTriggered(false);
                    setActiveCategory(0);
                    setCategory("");
                  }}
                >
                  {"All projects"}
                </Styles.PortfolioCategoryItem>
                {data.categories.map(({ name }, i) => (
                  <Styles.PortfolioCategoryItem
                    key={i}
                    className={i + 1 === activeCategory ? "active" : ""}
                    onClick={() => {
                      setIsRequestRepeated(false);
                      setIsCategoryChange(true);
                      setIsSearchTriggered(false);
                      setActiveCategory(i + 1);
                      setCategory(name);
                    }}
                  >
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </Styles.PortfolioCategoryItem>
                ))}
              </Styles.PortfolioCategoryWrapper>
              <Styles.PortfolioCommentWrapper>
                <Styles.PortfolioComment>
                  {activeCategory === 0
                    ? "Our portfolio is our greatest asset and your strongest guarantee. Explore cases that don’t gather dust on the shelf but earn money."
                    : data.categories[activeCategory - 1].description}
                </Styles.PortfolioComment>
              </Styles.PortfolioCommentWrapper>
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
                  {isCategoryWarning && category && (
                    <Styles.PortfolioFilterWarning>
                      {`Sorry, в категорії “${
                        data.categories[activeCategory - 1].name
                      }” нічого не знайдено`}
                    </Styles.PortfolioFilterWarning>
                  )}
                  {isRequestRepeated && (
                    <Styles.PortfolioFilterWarning>
                      {`Sorry, there are no matches in the category chosen, but we found “${searchTrigger}” in the other categories`}
                    </Styles.PortfolioFilterWarning>
                  )}
                </Styles.PortfolioSearchWrapper>
                <DropdownContainer className="portfolio_dropdown">
                  {industries.length > 0 &&
                    industries.map((filter, index) => (
                      <Styles.PortfolioIndustryTagWrapper key={index}>
                        <Styles.PortfolioIndustryTag>
                          {filter}&nbsp;&nbsp;
                        </Styles.PortfolioIndustryTag>
                        <Styles.PortfolioIndustryTagDelete>
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
                        </Styles.PortfolioIndustryTagDelete>
                      </Styles.PortfolioIndustryTagWrapper>
                    ))}
                  <Styles.PortfolioDropdownWrapper>
                    <Dropdown
                      className="portfolio_dropdown-element"
                      filters={industries}
                      setFilters={setIndustries}
                      tags={data.industries}
                      dropdownName="// INDUSTRY"
                      isTag={true}
                    />
                  </Styles.PortfolioDropdownWrapper>
                </DropdownContainer>
              </Styles.PortfolioFiltersWrapper>
              {reviewsData?.reviews && reviewsData.reviews.length > 0 ? (
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
              ) : (
                <Styles.PortfolioSearchWarning>
                  <div>
                    {`Sorry, no results were found for "${searchTrigger}".`}
                  </div>
                  <div className="warning_list-header">Recommendations:</div>
                  <ul>
                    <li>Make sure all the words are properly spelled.</li>
                    <li>Try using other keywords.</li>
                  </ul>
                </Styles.PortfolioSearchWarning>
              )}
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
