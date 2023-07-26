import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import parse from "html-react-parser";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { scroller } from "react-scroll";
import { SwiperSlide } from "swiper/react";

import PaginationBar from "../../components/PaginationBar/PaginationBar";
import BlogItem from "../../components/Blog/BlogItem";
import { adminBlogService } from "../../services/adminBlogPage";
import { adminGlobalService } from "../../services/adminHomePage";
import Dropdown from "../../utils/Select/Dropdown";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import PodcastItem from "../../components/Blog/PodcastItem";
import MainBlogItem from "../../components/Blog/MainBlogItem";
import SmallArticleItem from "../../components/Blog/SmallArticleItem";
import { BlogSwiper } from "../../components/Blog/BlogSlider/BlogSlider";
import { Loader, LoaderStub } from "../../components/Loader";
import { highestPagePointDisplayer } from "../../utils/highestPagePointDisplayer";

import {
  IArticlesDataResponse,
  IBlogPageData,
  ISwiperArticlesDataResponse,
} from "../../types/Blog.types";
import { IArticle } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";
import { Tag, DropdownContainer } from "../../styles/HomePage/General.styled";
import leftLine from "../../../public/BlogDecorations/MainPage/leftLine.png";
import rightLine from "../../../public/BlogDecorations/MainPage/rightLine.png";
import * as Styled from "../../styles/Blog.styled";
import { BlogPageSize } from "../../consts";

const BlogPage = () => {
  const router = useRouter();

  const [reversedArticles, setReversedArticles] = useState<IArticle[] | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filters, setFilters] = useState<string[]>([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isMainSliderImageLoaded, setIsMainSliderImageLoaded] =
    useState<boolean>(false);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [isTagsLoaded, setIsTagLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  const { data }: IBlogPageData = useQuery([queryKeys.getBlogPage], () =>
    adminBlogService.getBlogPageData()
  );

  const { data: swiperData }: ISwiperArticlesDataResponse = useQuery(
    [queryKeys.getBlogSwiperData],
    () => adminBlogService.getBlogSwiperData()
  );

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const {
    data: articles,
    isLoading,
    isFetching,
  }: IArticlesDataResponse = useQuery(
    [
      queryKeys.getBlogPaginatedAndFilteredArticles,
      filters,
      currentPage,
      BlogPageSize,
    ],
    () =>
      adminBlogService.getPaginatedAndFilteredReviews(
        filters,
        currentPage,
        BlogPageSize
      ),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  const scrollFunc = () => {
    scroller.scrollTo("articles-container", {
      duration: 0,
      delay: 0,
      smooth: false,
      offset: 0,
    });
  };

  const loadedImagesCounter = () => {
    const articlesCount = articles && articles.reviews.length;

    setLoadedImagesCount((prev) => prev + 1);

    if (loadedImagesCount + 1 === articlesCount) {
      filters.length && scrollFunc();
      setIsImagesLoaded(true);
    }
  };

  const imagesCountNullifier = () => {
    setIsImagesLoaded(false);
    setLoadedImagesCount(0);
  };

  highestPagePointDisplayer();

  useEffect(() => {
    scrollFunc();
    setIsTagLoaded(false);
    imagesCountNullifier();
    setCurrentPage(1);
  }, [filters.length]);

  useEffect(() => {
    setIsTagLoaded(false);
    imagesCountNullifier();
  }, [currentPage]);

  useEffect(() => {
    if (!isLoading && isFetching) setIsImagesLoaded(true);
  }, [isFetching]);

  useEffect(() => {
    if (!isLoading && !isFetching) setLoading(false);
  }, [isLoading, isFetching]);

  useEffect(() => {
    articles &&
      articles.reviews.length &&
      setReversedArticles(articles.reviews);
  }, [articles]);

  useEffect(() => {
    if (window.innerWidth < 769) window.scroll(0, 0);
  }, [isMainSliderImageLoaded]);

  const handleFilterFromURL = () => {
    const { tag } = router.query;
    if (typeof tag === "string") {
      setFilters([tag]);
    }
  };

  useEffect(() => {
    handleFilterFromURL();
  }, []);

  return (
    <Loader active={!isMainSliderImageLoaded && isFirstLoad}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>
      {isLoading && isFirstLoad ? (
        <LoaderStub />
      ) : (
        data && (
          <>
            <HeaderNavNew />
            <Styled.BlogContainer>
              <Styled.LeftLine src={leftLine.src} />
              <Styled.RightLine src={rightLine.src} />
              <Styled.HeaderBlock>
                <Styled.MainContainer>
                  {swiperData && (
                    <BlogSwiper>
                      {swiperData.reviews.map((article, idx) => (
                        <SwiperSlide key={idx}>
                          <MainBlogItem
                            article={article}
                            filters={filters}
                            setIsMainSliderImageLoaded={
                              setIsMainSliderImageLoaded
                            }
                          />
                        </SwiperSlide>
                      ))}
                    </BlogSwiper>
                  )}
                </Styled.MainContainer>
                <Styled.FlexColumnContainer className="header">
                  {swiperData &&
                    swiperData.reviews.map((article) => (
                      <SmallArticleItem
                        filters={filters}
                        article={article}
                        key={article._id}
                      />
                    ))}
                </Styled.FlexColumnContainer>
              </Styled.HeaderBlock>
              <PodcastItem data={data.podcast} />
              <Styled.BlogArticlesWrapper>
                {
                  <Loader
                    isBlog={true}
                    className="blog"
                    active={
                      (loading ||
                        isLoading ||
                        !isTagsLoaded ||
                        !articles ||
                        (articles?.reviews &&
                          articles.reviews.length > 0 &&
                          !isImagesLoaded)) &&
                      !isFirstLoad
                    }
                  >
                    {isLoading && !isFirstLoad ? (
                      <LoaderStub />
                    ) : (
                      <Styled.AllArticlesContainer id="articles-container">
                        {articles && articles.tags && articles.tags.length && (
                          <DropdownContainer className="blog">
                            <>
                              {filters.length > 0 &&
                                filters.map((filter, index) => (
                                  <Tag key={index}>
                                    {filter}&nbsp;&nbsp;
                                    <span
                                      onClick={() => {
                                        const newFilters = filters.filter(
                                          (filter) => filter !== filters[index]
                                        );
                                        setFilters([...newFilters]);
                                      }}
                                    >
                                      x
                                    </span>
                                  </Tag>
                                ))}
                            </>
                            <Dropdown
                              filters={filters}
                              className="blog"
                              setFilters={setFilters}
                              tags={articles.tags}
                              dropdownName="#TAGS"
                              prefix={"#"}
                              isTag={true}
                              setIsFirstLoad={setIsFirstLoad}
                            />
                          </DropdownContainer>
                        )}
                        {loading || isLoading || !articles ? (
                          <LoaderStub />
                        ) : articles.reviews.length ? (
                          <>
                            {reversedArticles &&
                              reversedArticles.map((article) => (
                                <BlogItem
                                  article={article}
                                  key={article._id}
                                  filters={filters}
                                  loadedImagesCounter={loadedImagesCounter}
                                  setIsTagLoaded={setIsTagLoaded}
                                />
                              ))}
                            {!!articles.totalPages && (
                              <PaginationBar
                                totalPages={articles.totalPages}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                scrollFunction={scrollFunc}
                                setLoading={setLoading}
                                setIsFirstLoad={setIsFirstLoad}
                              />
                            )}
                          </>
                        ) : (
                          <Styled.BlogArticlesTemplate>
                            {"no articles"}
                          </Styled.BlogArticlesTemplate>
                        )}
                      </Styled.AllArticlesContainer>
                    )}
                  </Loader>
                }
              </Styled.BlogArticlesWrapper>
            </Styled.BlogContainer>
            <FooterNew />
          </>
        )
      )}
    </Loader>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getFullHomePage], () =>
    adminGlobalService.getFullPage()
  );

  await queryClient.prefetchQuery([queryKeys.getBlogPage], () =>
    adminBlogService.getBlogPageData()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default BlogPage;