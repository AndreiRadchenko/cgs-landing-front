import React, { useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
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
import { DropdownContainer } from "../../styles/HomePage/General.styled";
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

  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [category, setCategory] = useState<string>("");
  const [isRequestRepeated, setIsRequestRepeated] = useState<boolean>(false);
  const [isSearchTriggered, setIsSearchTriggered] = useState<boolean>(false);
  const [isCategoryChange, setIsCategoryChange] = useState<boolean>(false);
  const [isCategoryWarning, setIsCategoryWarning] = useState<boolean>(false);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [searchTrigger, setSearchTrigger] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isPaginationTriggered, setIsPaginationTriggered] = useState(true);
  const categoryItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [categoryItemWidths, setCategoryItemWidths] = useState<string[]>([]);
  const [categoryItemHeights, setCategoryItemHeights] = useState<string[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);

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
      selectedIndustries,
      category,
      PortfolioPageSize,
      searchTrigger,
    ],
    () =>
      adminPortfolioService.getPaginatedAndFilteredReviews(
        category,
        selectedIndustries,
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
    if (isSearchOpen) {
      setIsFirstLoad(false);
      setIsPaginationTriggered(false);
      setSearchTrigger(searchText);
    } else {
      setIsSearchOpen(true);
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleSearchRequest();
    }
  };

  const scrollFunction = (isMobile = false) => {
    if (
      !contentRef.current ||
      isFirstLoad ||
      (isMobile && window.innerWidth > 992 && !isPaginationTriggered)
    )
      return;

    const topHeight = window.innerWidth > 768 ? 70 : 100;
    const scrollPosition = contentRef.current.offsetTop - topHeight;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  const filtersNullifier = () => {
    setSelectedIndustries([]);
    setCategory("");
    setActiveCategory(0);
  };

  const categoryOrIndustryTrigger = () => {
    setIsFirstLoad(false);
    setIsSearchTriggered(false);
    setIsRequestRepeated(false);
    setIsPaginationTriggered(false);
  };

  const updateURLParams = ({ category, selectedIndustries }: any) => {
    const industriesQuery = selectedIndustries.join(",");
    const queryParams: any = {};

    if (category) {
      queryParams.category = category;
    }

    if (selectedIndustries.length > 0) {
      queryParams.industries = industriesQuery;
    }

    router.push(
      {
        pathname: "/portfolio",
        query: queryParams,
      },
      undefined,
      { shallow: true }
    );
  };

  const handleCategoryItemRef =
    (index: number) => (ref: HTMLDivElement | null) => {
      categoryItemsRef.current[index] = ref;
    };

  const loadedImagesCounter = () => {
    const reviewsCount = reviewsData && reviewsData.reviews.length;

    setLoadedImagesCount((prev) => prev + 1);

    if (loadedImagesCount + 1 === reviewsCount) setIsImagesLoaded(true);
  };

  const imagesCountNullifier = () => {
    setIsImagesLoaded(false);
    setLoadedImagesCount(0);
  };

  useEffect(() => {
    if (reviewsData?.reviews.length === 0) {
      if ((category || selectedIndustries.length > 0) && isSearchTriggered) {
        filtersNullifier();
        setIsSearchTriggered(false);
        setIsRequestRepeated(true);
      }

      if (category && isCategoryChange) {
        setIsCategoryWarning(true);
      } else {
        setIsCategoryWarning(false);
      }
    }
  }, [reviewsData]);

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  useEffect(() => {
    setCurrentPage(1);
    imagesCountNullifier();
    scrollFunction(true);
  }, [selectedIndustries.length, searchTrigger, category]);

  useEffect(() => {
    if (!isLoading && !reviewsIsLoading) {
      if (isFirstLoad) {
        const updateCategoryItemParams = () => {
          const widths = categoryItemsRef.current.map((item) =>
            item
              ? Math.round(parseFloat(getComputedStyle(item).width)) + 5 + "px"
              : "auto"
          );
          const heights = categoryItemsRef.current.map((item) =>
            item ? getComputedStyle(item).height : "auto"
          );

          setCategoryItemWidths(widths);
          setCategoryItemHeights(heights);
        };
        updateCategoryItemParams();
      } else {
        scrollFunction(true);
      }
    }
  }, [isLoading, reviewsIsLoading, isFirstLoad]);

  useEffect(() => {
    setIsRequestRepeated(false);
  }, [searchTrigger]);

  useEffect(() => {
    const { category, industries } = router.query;
    const pickedIndustries =
      (typeof industries === "string" && industries?.split(",")) || [];

    if (category) {
      if (typeof category === "string" && category.split(",").length > 1) {
        setCategory("");
        setActiveCategory(0);
        return;
      }

      const activeCategoryIndex =
        typeof category === "string"
          ? data?.categories.findIndex((elem) => elem.name === category)
          : 0;

      activeCategoryIndex !== undefined &&
        setActiveCategory(activeCategoryIndex + 1);
      setCategory(category as string);
    }

    if (
      pickedIndustries?.length &&
      selectedIndustries.join(",") !== industries
    ) {
      setSelectedIndustries(pickedIndustries);
    }
  }, [router.query]);

  useEffect(() => {
    if (category) {
      updateURLParams({ category, selectedIndustries });
    } else {
      updateURLParams({ category: "", selectedIndustries });
    }
  }, [category]);

  useEffect(() => {
    if (selectedIndustries.length > 0) {
      updateURLParams({ category, selectedIndustries });
    } else {
      updateURLParams({ category, selectedIndustries: [] });
    }
  }, [selectedIndustries]);

  return (
    <Loader
      active={(isLoading || reviewsIsLoading || !isImagesLoaded) && isFirstLoad}
    >
      {(isLoading || reviewsIsLoading) && isFirstLoad ? (
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
              <Styles.PortfolioFiltersWrapper>
                <Styles.PortfolioCategoryWrapper>
                  <Styles.PortfolioCategoryItem
                    ref={handleCategoryItemRef(0)}
                    blockWidth={categoryItemWidths[0]}
                    blockHeight={categoryItemHeights[0]}
                    className={activeCategory === 0 ? "active" : ""}
                    onClick={() => {
                      categoryOrIndustryTrigger();
                      setIsCategoryChange(true);
                      setActiveCategory(0);
                      setCategory("");
                    }}
                  >
                    {"All projects"}
                  </Styles.PortfolioCategoryItem>
                  {data.categories.map(({ name }, i) => (
                    <Styles.PortfolioCategoryItem
                      key={i}
                      ref={handleCategoryItemRef(i + 1)}
                      blockWidth={categoryItemWidths[i + 1]}
                      blockHeight={categoryItemHeights[i + 1]}
                      className={i + 1 === activeCategory ? "active" : ""}
                      onClick={() => {
                        categoryOrIndustryTrigger();
                        setIsCategoryChange(true);
                        setActiveCategory(i + 1);
                        setCategory(name);
                      }}
                    >
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </Styles.PortfolioCategoryItem>
                  ))}
                </Styles.PortfolioCategoryWrapper>
                <Styles.PortfolioSearchAndInductriesWrapper>
                  <Styles.PortfolioSearchAndInductries>
                    <Styles.PortfolioSearchWrapper>
                      <Styles.PortfolioSearch isSearchOpen={isSearchOpen}>
                        <Styles.PortfolioSearchButton
                          onClick={handleSearchRequest}
                        >
                          <Styles.PortfolioSearchIcon
                            isSearchOpen={isSearchOpen}
                          />
                        </Styles.PortfolioSearchButton>
                        <Styles.PortfolioInputWrapper
                          isSearchOpen={isSearchOpen}
                        >
                          <input
                            type="text"
                            value={searchText}
                            placeholder="Search work"
                            onChange={handleSearchChange}
                            onKeyDown={handleKeyDown}
                          />
                        </Styles.PortfolioInputWrapper>
                        <Styles.PortfolioSearchCloseButton
                          isSearchOpen={isSearchOpen}
                        >
                          <Styles.PortfolioSearchCloseIcon
                            onClick={() => {
                              setSearchText("");
                              setSearchTrigger("");
                              setIsSearchOpen(false);
                            }}
                          />
                        </Styles.PortfolioSearchCloseButton>
                      </Styles.PortfolioSearch>
                    </Styles.PortfolioSearchWrapper>
                    <DropdownContainer className="portfolio_dropdown">
                      <Styles.PortfolioDropdownWrapper>
                        <Dropdown
                          className="portfolio_dropdown-element"
                          filters={selectedIndustries}
                          setFilters={setSelectedIndustries}
                          tags={data.industries}
                          dropdownName="// INDUSTRY"
                          isTag={true}
                          additionalLogic={categoryOrIndustryTrigger}
                        />
                      </Styles.PortfolioDropdownWrapper>
                    </DropdownContainer>
                  </Styles.PortfolioSearchAndInductries>
                  {selectedIndustries.length > 0 && (
                    <Styles.SelectedIndustriesWrapper>
                      <Styles.SelectedIndustries>
                        {selectedIndustries.length > 1 && (
                          <Styles.IndustriesClearButton
                            onClick={() => setSelectedIndustries([])}
                          >
                            {"clear all"}
                          </Styles.IndustriesClearButton>
                        )}
                        {selectedIndustries.length > 0 &&
                          selectedIndustries.map((filter, index) => (
                            <Styles.PortfolioIndustryTagWrapper key={index}>
                              <Styles.PortfolioIndustryTag>
                                {filter}
                              </Styles.PortfolioIndustryTag>
                              <Styles.PortfolioIndustryTagDelete
                                onClick={() => {
                                  const newIndustries =
                                    selectedIndustries.filter(
                                      (filter) =>
                                        filter !== selectedIndustries[index]
                                    );
                                  setSelectedIndustries([...newIndustries]);
                                }}
                              />
                            </Styles.PortfolioIndustryTagWrapper>
                          ))}
                      </Styles.SelectedIndustries>
                    </Styles.SelectedIndustriesWrapper>
                  )}
                </Styles.PortfolioSearchAndInductriesWrapper>
              </Styles.PortfolioFiltersWrapper>

              <Styles.PortfolioProjectsWrapper ref={contentRef}>
                <Loader
                  isPortfolio={true}
                  active={
                    (isLoading || reviewsIsLoading || !isImagesLoaded) &&
                    !isFirstLoad
                  }
                >
                  {(isLoading || reviewsIsLoading) && !isFirstLoad ? (
                    <LoaderStub />
                  ) : reviewsData?.reviews && reviewsData.reviews.length > 0 ? (
                    <>
                      {isRequestRepeated && (
                        <Styles.PortfolioFilterWarning>
                          <div className="sorry-message">
                            {`Sorry, there are no matches in the category chosen, but we found “${searchTrigger}” in the other categories`}
                          </div>
                        </Styles.PortfolioFilterWarning>
                      )}
                      <Styles.PortfolioProjectsContainer isSeeMore={false}>
                        {reviewsData?.reviews &&
                          reviewsData.reviews.map((project) => (
                            <PortfolioProjectComponent
                              key={project._id}
                              project={project}
                              loadedImagesCounter={loadedImagesCounter}
                            />
                          ))}
                      </Styles.PortfolioProjectsContainer>
                      <Pagination
                        reviewsData={reviewsData}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        scrollFunction={() => {
                          imagesCountNullifier();
                          scrollFunction(true);
                        }}
                        setIsFirstLoad={setIsFirstLoad}
                        setIsPaginationTriggered={setIsPaginationTriggered}
                      />
                    </>
                  ) : isCategoryWarning && category ? (
                    <Styles.PortfolioSearchWarning>
                      <div className="sorry-message">
                        {`Sorry, there are no results in “${
                          data.categories[activeCategory - 1].name
                            .charAt(0)
                            .toUpperCase() +
                          data.categories[activeCategory - 1].name.slice(1)
                        }”`}
                      </div>
                      <div>Recommendations:</div>
                      <ul>
                        <li>Make sure the category is correct.</li>
                        <li>Try checking out different industry options.</li>
                      </ul>
                    </Styles.PortfolioSearchWarning>
                  ) : (
                    <Styles.PortfolioSearchWarning>
                      <div className="sorry-message">
                        <span>
                          {'Sorry, no results were found for "'}
                          <span className="search-word">{searchTrigger}</span>
                          {'"'}
                        </span>
                      </div>
                      <div>Recommendations:</div>
                      <ul>
                        <li>Make sure all the words are properly spelled.</li>
                        <li>Try using other keywords.</li>
                      </ul>
                    </Styles.PortfolioSearchWarning>
                  )}
                </Loader>
              </Styles.PortfolioProjectsWrapper>
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
