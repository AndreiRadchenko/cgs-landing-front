import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import { scroller } from "react-scroll";
import { useMediaQuery } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { Pagination } from "../../components/CV/Pagination";
import { ListItem } from "../../components/CV/List/ListItem/ListItem";
import FooterNew from "../../components/FooterNew/FooterNew";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import { queryKeys } from "../../consts/queryKeys";
import { Loader, LoaderStub } from "../../components/Loader";
import { adminCvService } from "../../services/adminCvPage";

import * as Styles from "../../styles/CV/DevsInfo.styled";

import { ICvListResponse, ICvResponse } from "../../types/Admin/AdminCv.types";

const DevsInfo = () => {
  const { data, isLoading }: ICvResponse = useQuery([queryKeys.getCvPage], () =>
    adminCvService.getCvPage()
  );

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const categoryItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [category, setCategory] = useState<string>("");
  const [isSearchTriggered, setIsSearchTriggered] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [searchTrigger, setSearchTrigger] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isPaginationTriggered, setIsPaginationTriggered] = useState(true);
  const [categoryItemWidths, setCategoryItemWidths] = useState<string[]>([]);
  const [categoryItemHeights, setCategoryItemHeights] = useState<string[]>([]);
  const [limit, setLimit] = useState(10);
  const [isRequestRepeated, setIsRequestRepeated] = useState<boolean>(false);
  const [isCategoryWarning, setIsCategoryWarning] = useState<boolean>(false);
  const [isCategoryChange, setIsCategoryChange] = useState<boolean>(false);

  const { data: cvData, isLoading: cvsLoading }: ICvListResponse = useQuery(
    [
      queryKeys.getPaginatedAndFilteredCvs,
      category,
      searchTrigger,
      currentPage,
      limit,
    ],
    () =>
      adminCvService.getPaginatedAndFilteredCvs(
        category,
        searchTrigger,
        currentPage,
        limit
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

  const updateURLParams = ({ category, page }: any) => {
    const queryParams: any = {};

    if (category) {
      queryParams.category = category;
    }

    if (page && page > 1) {
      queryParams.page = page;
    }

    router.push(
      {
        pathname: "/cv",
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
      if (category && isSearchTriggered) {
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
      setLimit(8);
    }
  }, [isMobile]);

  useEffect(() => {
    if (searchTrigger === "") {
      setIsRequestRepeated(false);
    }
  }, [searchTrigger]);

  useEffect(() => {
    const { category, page } = router.query;

    if (category) {
      if (typeof category === "string" && category.split(",").length > 1) {
        setCategory("");
        setActiveCategory(0);
        return;
      }

      const activeCategoryIndex =
        typeof category === "string"
          ? data?.categories.findIndex((elem) => elem === category)
          : 0;

      if (typeof activeCategoryIndex !== "undefined")
        setActiveCategory(activeCategoryIndex);

      setCategory(category as string);
    }

    if (page && typeof page === "string") {
      setCurrentPage(Number(page));
    }
  }, [router.query, data?.categories]);

  useEffect(() => {
    if (category) {
      updateURLParams({ category, page: "" });
    } else {
      updateURLParams({ category: "", page: "" });
    }
  }, [category]);

  useEffect(() => {
    if (currentPage) {
      updateURLParams({ category, page: currentPage });
    } else {
      updateURLParams({ category, page: "" });
    }
  }, [currentPage]);

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
      {isLoading ? (
        <LoaderStub />
      ) : data ? (
        <>
          <Styles.CvContainer>
            <div>
              <HeaderNavNew />
              <Styles.Layout>
                <Styles.CvTitle>{data.title}</Styles.CvTitle>
                <Styles.SettingsBlock>
                  <Styles.PortfolioCategoryWrapper>
                    {data?.categories.map((name, i) => (
                      <Styles.PortfolioCategoryItem
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
                      </Styles.PortfolioCategoryItem>
                    ))}
                  </Styles.PortfolioCategoryWrapper>
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
                        <Styles.PortfolioFilterWarning className="cv">
                          <div className="sorry-message">
                            {`Sorry, there are no matches in the category chosen, but we found “${searchTrigger}” in the other categories`}
                          </div>
                        </Styles.PortfolioFilterWarning>
                      )}
                      <Styles.ListWrapper>
                        {cvData?.cvs.map((item, i) => (
                          <ListItem key={i} item={item} i={i} />
                        ))}
                      </Styles.ListWrapper>
                    </>
                  ) : isCategoryWarning && category ? null : !cvsLoading ? (
                    <Styles.PortfolioSearchWarning className="cv">
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
                    </Styles.PortfolioSearchWarning>
                  ) : (
                    <div style={{ height: 1900 }} />
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
        <Styles.AdminUnauthorizedModal>
          Something went wrong :(
        </Styles.AdminUnauthorizedModal>
      )}
    </Loader>
  );
};

export default DevsInfo;
