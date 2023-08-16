import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { scroller } from "react-scroll";
import parse from "html-react-parser";
import Head from "next/head";
import { useMediaQuery } from "@mui/material";

import { Pagination } from "../../components/CV/Pagination";
import { ListItem } from "../../components/CV/List/ListItem/ListItem";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import { queryKeys } from "../../consts/queryKeys";
import { Loader, LoaderStub } from "../../components/Loader";
import { adminCvService } from "../../services/adminCvPage";

import * as Styled from "../../styles/AdminPage";
import * as Styles from "../../styles/CV/DevsInfo.styled"
import * as PortfolioStyles from "../../styles/Portfolio.styled";

import { ICvListResponse, ICvResponse } from "../../types/Admin/AdminCv.types";

const DevsInfo = () => {
  const { data, isLoading }: ICvResponse = useQuery(
    [queryKeys.getCvPage],
    () =>
      adminCvService.getCvPage()
  );

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  const isMobile = useMediaQuery("(max-width: 768px)")
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [category, setCategory] = useState<string>("");
  const [isSearchTriggered, setIsSearchTriggered] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [searchTrigger, setSearchTrigger] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isPaginationTriggered, setIsPaginationTriggered] = useState(true);
  const categoryItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [categoryItemWidths, setCategoryItemWidths] = useState<string[]>([]);
  const [categoryItemHeights, setCategoryItemHeights] = useState<string[]>([]);
  const [limit, setLimit] = useState(10);
  const [isRequestRepeated, setIsRequestRepeated] = useState<boolean>(false);
  const [isCategoryWarning, setIsCategoryWarning] = useState<boolean>(false);
  const [isCategoryChange, setIsCategoryChange] = useState<boolean>(false);

  const { data: cvData, isLoading: cvsLoading }: ICvListResponse = useQuery(
    [queryKeys.getPaginatedAndFilteredCvs,
      category,
      searchTrigger,
      currentPage,
      limit
    ],
    () =>
      adminCvService.getPaginatedAndFilteredCvs(
        category,
        searchTrigger,
        currentPage,
        limit,
      )
  );

  const scrollFunction = () => {
    if (window.innerWidth > 992 && !isPaginationTriggered) return;

    const topHeight = window.innerWidth > 768 ? -70 : -100;

    scroller.scrollTo("cv-wrapper", {
      duration: 0,
      delay: 0,
      smooth: false,
      offset: topHeight,
    });
  };

  const categoryTrigger = () => {
    setIsFirstLoad(false);
    setIsSearchTriggered(false);
    setIsRequestRepeated(false);
    setIsPaginationTriggered(false);
  };

  const handleCategoryItemRef =
    (index: number) => (ref: HTMLDivElement | null) => {
      categoryItemsRef.current[index] = ref;
    };

  const handleSearchChange = (e: any) => {
    setIsSearchTriggered(true);
    setSearchText(e.target.value);
  };

  const handleSearchRequest = () => {
    setIsFirstLoad(false);
    setIsPaginationTriggered(false);
    setSearchTrigger(searchText);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleSearchRequest();
    }
  };

  const filtersNullifier = () => {
    setCategory("");
    setActiveCategory(0);
  };

  useEffect(() => {
    if (cvData?.cvs.length === 0) {
      if ((category) && isSearchTriggered) {
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
  }, [cvData]);

  useEffect(() => {
    if (isMobile) {
      setLimit(8)
    }
  }, [isMobile]);

  useEffect(() => {
    if(searchTrigger === "") {
      setIsRequestRepeated(false);
    }
  }, [searchTrigger]);

  useEffect(() => {
    if (!isLoading && !cvsLoading) {
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
        scrollFunction();
      }
    }
  }, [isLoading, cvsLoading, isFirstLoad]);

  return (
    <Loader active={isLoading}>
      <Head>
        <title>{metaTitle || "CV | CGS-team"}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>
      {
        isLoading ? (
          <LoaderStub />
        ) : data ? (
          <>
            <Styles.CvContainer>
              <div>
                <HeaderNavNew />
                <Styles.Layout>
                  <Styles.CvTitle>{data.title}</Styles.CvTitle>
                  <Styles.SettingsBlock>
                    <PortfolioStyles.PortfolioCategoryWrapper>
                      {data?.categories.map((name, i) => (
                        <PortfolioStyles.PortfolioCategoryItem
                          key={i}
                          ref={handleCategoryItemRef(i)}
                          blockWidth={categoryItemWidths[i]}
                          blockHeight={categoryItemHeights[i]}
                          className={i === activeCategory ? "active" : "cv"}
                          onClick={() => {
                            categoryTrigger();
                            setActiveCategory(i);
                            setIsCategoryChange(true);
                            setCategory(name);
                          }}
                        >
                          {name.charAt(0).toUpperCase() + name.slice(1)}
                        </PortfolioStyles.PortfolioCategoryItem>
                      ))}
                    </PortfolioStyles.PortfolioCategoryWrapper>
                    <Styles.CvSearchWrapper>
                      <Styles.CvSearchButton>
                        <Styles.CvSearchIcon 
                          onClick={() => handleSearchRequest()}
                        />
                      </Styles.CvSearchButton>
                      <Styles.CvSearchInput
                        placeholder="Search developer"
                        value={searchText}
                        onChange={handleSearchChange}
                        onKeyDown={handleKeyDown}
                      />
                    </Styles.CvSearchWrapper>
                  </Styles.SettingsBlock>
                  <Loader isPortfolio={true} className="portfolio" active={false}>
                    {(isLoading || cvsLoading) && !isFirstLoad ? (
                      <LoaderStub />
                    ) : cvData?.cvs && cvData.cvs.length > 0 ? (
                      <>
                        {isRequestRepeated && (
                          <PortfolioStyles.PortfolioFilterWarning className="cv">
                            <div className="sorry-message">
                              {`Sorry, there are no matches in the category chosen, but we found “${searchTrigger}” in the other categories`}
                            </div>
                          </PortfolioStyles.PortfolioFilterWarning>
                        )}
                        <Styles.ListWrapper>
                          {cvData?.cvs.map((item, i) => (
                            <ListItem item={item} i={i} />
                          ))}
                        </Styles.ListWrapper>
                      </>
                    ) : isCategoryWarning && category ? (
                      null
                    ) : (
                      <PortfolioStyles.PortfolioSearchWarning className="cv">
                        <div className="sorry-message">
                          <span>
                            {'Sorry, no results were found for "'}
                            <span className="search-word">{searchTrigger}</span>
                            {'".'}
                          </span>
                        </div>
                        <div>Recommendations:</div>
                        <ul>
                          <li>Make sure all the words are properly spelled.</li>
                          <li>Try using other keywords.</li>
                        </ul>
                      </PortfolioStyles.PortfolioSearchWarning>
                    )}
                  </Loader>
                  <Pagination
                    cvData={cvData}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    scrollFunction={() => {
                      scrollFunction();
                    }}
                    setIsFirstLoad={setIsFirstLoad}
                    setIsPaginationTriggered={setIsPaginationTriggered}
                  />
                </Styles.Layout>
              </div>
              <FooterNew />
            </Styles.CvContainer>
          </>
        ) : (
          <Styled.AdminUnauthorizedModal>
            Something went wrong :(
          </Styled.AdminUnauthorizedModal>
        )
      }
    </Loader >
  );
};

export default DevsInfo;
