import React, { useEffect, useMemo, useState } from "react";
import parse from "html-react-parser";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Head from "next/head";
import { SwiperSlide } from "swiper/react";

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
import { Loader } from "../../components/Loader";

import loading from "../../../public/CareerDecorations/loading.svg";
import { useScrollTo } from "../../hooks/useScrollTo";
import { isNumeric } from "../../utils/isNumeric";
import { Loading } from "../../components/CareersForm/Form/Form.styled";
import { IArticlesData, IBlogPageData } from "../../types/Blog.types";
import { BlogPageSize } from "../../consts";
import Dropdown from "../../utils/Select/Dropdown";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getBlogPage], () =>
    adminBlogService.getBlogPageData()
  );

  await queryClient.prefetchQuery([queryKeys.getBlogArticles], () =>
    adminBlogService.getArticles()
  );

  await queryClient.prefetchQuery([queryKeys.views], () =>
    adminBlogService.getViews()
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

const BlogPage = () => {
  const router = useRouter();

  const { data }: IBlogPageData = useQuery([queryKeys.getBlogPage], () =>
    adminBlogService.getBlogPageData()
  );

  const { data: articles }: IArticlesData = useQuery(
    [queryKeys.getBlogArticles],
    () => adminBlogService.getArticles()
  );

  const views = useQuery([queryKeys.views], () => adminBlogService.getViews());
  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());
  const [ref, scrollHandler] = useScrollTo<HTMLDivElement>();
  const [reversedArticles, setReversedArticles] = useState<IArticle[] | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filters, setFilters] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<IArticle[] | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isMainSliderImageLoaded, setIsMainSliderImageLoaded] =
    useState<boolean>(false);

  useEffect(() => {
    articles &&
      setReversedArticles(
        articles
          .reverse()
          .filter(
            (el) =>
              !el.disabled &&
              !el.draft &&
              (!el.scheduleArticle ||
                new Date() >= new Date(el.scheduleArticle))
          )
      );
  }, [articles]);

  useEffect(() => {
    const newTags = reversedArticles?.map((article) => article.tags).flat();
    setTags(Array.from(new Set<string>(newTags)));
  }, [data, reversedArticles]);

  useEffect(() => {
    if (filters.length > 0) {
      const newData = reversedArticles?.filter((article) =>
        article.tags.find((tag) => filters.includes(tag))
      );
      setFilteredData(newData ? newData : null);
    }
  }, [data, filters, filters.length, reversedArticles]);

  const tagParams = router.query.tag;
  useEffect(() => {
    if (articles) {
      const page = router.query.page;
      const maxPage = Math.ceil(articles.length / BlogPageSize);
      const currentPage =
        page !== "0" && isNumeric(page as string)
          ? Number(page) <= maxPage
            ? Number(page)
            : maxPage
          : 1;
      tagParams &&
        !filters.includes(tagParams as string) &&
        setFilters([...filters, tagParams as string]);
      setCurrentPage(currentPage);
      if (tagParams) {
        scrollHandler();
      }
    }
  }, [tagParams, scrollHandler, router.query.page, data, articles, filters]);

  const currentArticlesData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * BlogPageSize;
    const lastPageIndex = firstPageIndex + BlogPageSize;
    if (filters.length > 0 && filteredData) {
      return filteredData?.slice(firstPageIndex, lastPageIndex);
    }
    return reversedArticles?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredData, reversedArticles, filters]);

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  const findViews = (url: string) => {
    if (views.data)
      return views.data.find((view) => view.articleUrl === url)?.views;
  };

  useEffect(() => {
    if (router.query.page !== "1" && filters.length) {
      setIsLoading(true);
      setCurrentPage(1);
      router.push("/blog?page=1").then(() => {
        setIsLoading(false);
        scrollHandler();
      });
    }
  }, [filters.length]);

  useEffect(() => {
    if (router.query.page) scrollHandler();

    if (router.query.filters) {
      if (typeof router.query.filters === "string") {
        setFilters([router.query.filters]);
      } else {
        setFilters(router.query.filters);
      }
    }
  }, [router.query.page, router.query.filters, scrollHandler]);

  return (
    <Loader active={!isMainSliderImageLoaded}>
      {data && views.data ? (
        <>
          <Head>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            {customHead && parse(customHead)}
          </Head>
          {isLoading && (
            <Styled.LoaderContainer className={"loading"}>
              <Loading src={loading.src} isLoading={true} />
            </Styled.LoaderContainer>
          )}
          <HeaderNavNew />
          <Styled.BlogContainer>
            <Styled.LeftLine src={leftLine.src} />
            {currentArticlesData && (
              <Styled.RightLine
                src={rightLine.src}
                articles={currentArticlesData.length}
              />
            )}
            <Styled.HeaderBlock>
              <Styled.MainContainer>
                {reversedArticles && (
                  <BlogSwiper>
                    {reversedArticles.slice(0, 3).map((article, idx) => (
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
                {reversedArticles &&
                  reversedArticles
                    .slice(1, 4)
                    .map((article) => (
                      <SmallArticleItem
                        filters={filters}
                        article={article}
                        key={article._id}
                      />
                    ))}
              </Styled.FlexColumnContainer>
            </Styled.HeaderBlock>
            <PodcastItem data={data.podcast} />
            {(articles && (
              <Styled.AllArticlesContainer articles={articles.length}>
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
                    tags={tags}
                    dropdownName="#TAGS"
                    prefix={"#"}
                    isTag={true}
                  />
                </DropdownContainer>
                {currentArticlesData &&
                  currentArticlesData.map((article, i) =>
                    i === 0 ? (
                      <div ref={ref} key={article._id}>
                        <BlogItem
                          article={article}
                          views={findViews(article.url)}
                          filters={filters}
                        />
                      </div>
                    ) : (
                      <BlogItem
                        article={article}
                        key={article._id}
                        views={findViews(article.url)}
                        filters={filters}
                      />
                    )
                  )}
                <PaginationBar
                  currentPage={currentPage}
                  totalCount={
                    filters.length > 0 && filteredData
                      ? filteredData.length
                      : articles.length
                  }
                  pageSize={BlogPageSize}
                  siblingCount={1}
                  filters={filters}
                />
              </Styled.AllArticlesContainer>
            )) ||
              "no articles"}
            <FooterNew />
          </Styled.BlogContainer>
        </>
      ) : (
        <Styled.LoaderContainer className={"loading"}>
          <Loading src={loading.src} isLoading={true} />
        </Styled.LoaderContainer>
      )}
    </Loader>
  );
};

export default BlogPage;
