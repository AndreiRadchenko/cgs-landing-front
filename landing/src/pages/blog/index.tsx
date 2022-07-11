import React, { useEffect, useMemo, useState } from "react";
import parse from "html-react-parser";
import { useQuery } from "react-query";
import { IArticle, IBlogResponse } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";
import PaginationBar from "../../components/PaginationBar/PaginationBar";
import BlogItem from "../../components/Blog/BlogItem";

import { adminBlogService } from "../../services/adminBlogPage";
import { adminGlobalService } from "../../services/adminHomePage";
import * as Styled from "../../styles/Blog.styled";
import Head from "next/head";
import { AdminUnauthorizedModal } from "../../styles/AdminPage";
import BlogDropdown from "../../components/Blog/BlogDropdown";
import leftLine from "../../../public/BlogDecorations/MainPage/leftLine.png";
import rightLine from "../../../public/BlogDecorations/MainPage/rightLine.png";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import FooterNew from "../../components/FooterNew/FooterNew";
import PodcastItem from "../../components/Blog/PodcastItem";
import MainBlogItem from "../../components/Blog/MainBlogItem";
import SmallArticleItem from "../../components/Blog/SmallArticleItem";

interface IBlogData {
  data: IBlogResponse | undefined;
  isLoading: boolean;
}

const PageSize = 4;

const BlogPage = () => {
  const { data, isLoading }: IBlogData = useQuery(queryKeys.getBlogPage, () =>
    adminBlogService.getBlogPage()
  );

  useQuery(queryKeys.getFullHomePage, () => adminGlobalService.getFullPage());

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filter, setFilter] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState<IArticle[] | null>(null);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const newTags = data?.articles.map((article) => article.tags).flat();
    setTags(Array.from(new Set<string>(newTags)));
  }, [data]);

  useEffect(() => {
    if (filter) {
      const newData = data?.articles.filter((article) =>
        article.tags.find((tag) => tag === filter)
      );
      setFilteredData(newData ? newData : null);
    }
  }, [data?.articles, filter]);

  const currentArticlesData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    if (filter && filteredData) {
      return filteredData?.slice(firstPageIndex, lastPageIndex);
    }
    return data?.articles.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data?.articles, filteredData, filter]);

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  return data && currentArticlesData ? (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>
      <HeaderNavNew />
      <Styled.BlogContainer>
        <Styled.LeftLine src={leftLine.src} />
        <Styled.RightLine
          src={rightLine.src}
          articles={currentArticlesData.length}
        />
        <Styled.HeaderBlock>
          <MainBlogItem article={data.articles[0]} />
          <Styled.FlexColumnContainer>
            <SmallArticleItem article={data.articles[0]} />
            <SmallArticleItem article={data.articles[1]} />
            <SmallArticleItem article={data.articles[0]} />
          </Styled.FlexColumnContainer>
        </Styled.HeaderBlock>
        <Styled.Separator />
        <PodcastItem />
        <Styled.Separator />
        <Styled.AllArticlesContainer articles={data.articles.length}>
          <Styled.DropdownContainer>
            {filter && (
              <Styled.Tag>
                {filter}&nbsp;&nbsp;
                <span onClick={() => setFilter(null)}>x</span>
              </Styled.Tag>
            )}
            <BlogDropdown setFilter={setFilter} filter={filter} tags={tags} />
          </Styled.DropdownContainer>
          {currentArticlesData.map((article) => (
            <BlogItem article={article} key={article._id} />
          ))}
          <PaginationBar
            currentPage={currentPage}
            totalCount={data.articles.length}
            pageSize={PageSize}
            onPageChange={(page: string | number) =>
              setCurrentPage(Number(page))
            }
            siblingCount={1}
          />
        </Styled.AllArticlesContainer>
        <FooterNew />
      </Styled.BlogContainer>
    </>
  ) : (
    <AdminUnauthorizedModal>Loading...</AdminUnauthorizedModal>
  );
};

export default BlogPage;
