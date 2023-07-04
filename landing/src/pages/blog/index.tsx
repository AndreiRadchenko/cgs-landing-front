import React, { useEffect, useMemo, useState } from "react";
import parse from "html-react-parser";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Head from "next/head";
import { SwiperSlide } from "swiper/react";
import { animateScroll as scroll, scroller } from "react-scroll";

import { IArticle } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";
import PaginationBar from "../../components/PaginationBar/PaginationBar";
import BlogItem from "../../components/Blog/BlogItem";

import { adminBlogService } from "../../services/adminBlogPage";
import { adminGlobalService } from "../../services/adminHomePage";
import * as Styled from "../../styles/Blog.styled";
import { Tag, DropdownContainer } from "../../styles/HomePage/General.styled";
import leftLine from "../../../public/BlogDecorations/MainPage/leftLine.png";
import rightLine from "../../../public/BlogDecorations/MainPage/rightLine.png";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import PodcastItem from "../../components/Blog/PodcastItem";
import MainBlogItem from "../../components/Blog/MainBlogItem";
import SmallArticleItem from "../../components/Blog/SmallArticleItem";
import { BlogSwiper } from "../../components/Blog/BlogSlider/BlogSlider";
import { Loader, LoaderStub } from "../../components/Loader";

import {
  IArticlesDataResponse,
  IBlogPageData,
  ISwiperArticlesDataResponse,
} from "../../types/Blog.types";
import { BlogPageSize } from "../../consts";
import Dropdown from "../../utils/Select/Dropdown";

const BlogPage = () => {
  const { data }: IBlogPageData = useQuery([queryKeys.getBlogPage], () =>
    adminBlogService.getBlogPageData()
  );

  const { data: swiperData }: ISwiperArticlesDataResponse = useQuery(
    [queryKeys.getBlogSwiperData],
    () => adminBlogService.getBlogSwiperData()
  );

  const views = useQuery([queryKeys.views], () => adminBlogService.getViews());
  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());
  const [reversedArticles, setReversedArticles] = useState<IArticle[] | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filters, setFilters] = useState<string[]>([]);
  const [isMainSliderImageLoaded, setIsMainSliderImageLoaded] =
    useState<boolean>(false);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [isTagsLoaded, setIsTagsLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

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

  const findViews = (url: string) => {
    if (views.data)
      return views.data.find((view) => view.articleUrl === url)?.views;
  };

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

  useEffect(() => {
    scrollFunc();
    setIsTagsLoaded(false);
    imagesCountNullifier();
    setCurrentPage(1);
  }, [filters.length]);

  useEffect(() => {
    setIsTagsLoaded(false);
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

  return (
    <Loader active={!isMainSliderImageLoaded}>
      {isLoading ? (
        <LoaderStub />
      ) : data ? (
        <>
          <Head>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            {customHead && parse(customHead)}
          </Head>
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
                          views={findViews(article.url)}
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
                  active={
                    loading ||
                    isLoading ||
                    !isTagsLoaded ||
                    !articles ||
                    !views ||
                    (articles?.reviews &&
                      articles.reviews.length > 0 &&
                      !isImagesLoaded)
                  }
                >
                  <Styled.AllArticlesContainer id="articles-container">
                    {articles && articles.tags && articles.tags.length && (
                      <DropdownContainer>
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
                        />
                      </DropdownContainer>
                    )}
                    {loading || isLoading || !articles || !views ? (
                      <LoaderStub />
                    ) : articles.reviews.length ? (
                      <>
                        {reversedArticles &&
                          reversedArticles.map((article) => (
                            <BlogItem
                              article={article}
                              key={article._id}
                              views={findViews(article.url)}
                              filters={filters}
                              loadedImagesCounter={loadedImagesCounter}
                              setIsTagsLoaded={setIsTagsLoaded}
                            />
                          ))}
                        {!!articles.totalPages && (
                          <PaginationBar
                            totalPages={articles.totalPages}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            scrollFunction={scrollFunc}
                            setLoading={setLoading}
                          />
                        )}
                      </>
                    ) : (
                      <Styled.BlogArticlesTemplate>
                        {"no articles"}
                      </Styled.BlogArticlesTemplate>
                    )}
                  </Styled.AllArticlesContainer>
                </Loader>
              }
            </Styled.BlogArticlesWrapper>
          </Styled.BlogContainer>
          <FooterNew />
        </>
      ) : (
        <>{"Test"}</>
      )}
    </Loader>
  );
};

export default BlogPage;
