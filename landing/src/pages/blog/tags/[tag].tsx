import React, { useEffect, useMemo, useState } from "react";
import { Page } from "../../../styles/Page.styled";
import HeaderNav from "../../../components/HeaderNav/HeaderNav";
import Footer from "../../../components/Footer/Footer";
import { useQuery } from "react-query";
import { IArticle, IBlogResponse } from "../../../types/Admin/Response.types";
import { queryKeys } from "../../../consts/queryKeys";
import PaginationBar from "../../../components/PaginationBar/PaginationBar";
import BlogItem from "../../../components/BlogItem/BlogItem";
import ArrowBack from "../../../../public/arrowBack.svg";

import * as Styles from "../../../styles/BlogPage.styled";
import { adminBlogService } from "../../../services/adminBlogPage";
import { Router, useRouter } from "next/router";
import Link from "next/link";

interface IHomeData {
  data: IBlogResponse | undefined;
  isLoading: boolean;
}

const PageSize = 4;

const BlogPage = () => {
  const router = useRouter();
  const tag = typeof router.query?.tag === "string" ? router.query.tag : "";
  const [articles, setArticles] = useState<IArticle[] | undefined | null>(null);
  const { data, isLoading }: IHomeData = useQuery(queryKeys.getBlogPage, () =>
    adminBlogService.getBlogPage()
  );

  useEffect(() => {
    if (data)
      setArticles(
        data.articles.filter((article) => article.tags.includes(tag))
      );
  }, [data, tag]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const currentArticlesData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return articles?.slice(firstPageIndex, lastPageIndex);
  }, [articles, currentPage]);

  return (
    <>
      {!isLoading && articles && (
        <Styles.PageWrapper>
          <Page>
            <HeaderNav />
            <Styles.ArrowBackButton
              src={ArrowBack.src}
              onClick={() => router.back()}
            />
            <Styles.PageHeaderWrapper>
              <Styles.TagTitle>TAG: {tag}</Styles.TagTitle>
            </Styles.PageHeaderWrapper>
          </Page>
          <Styles.BlogItemsWrapper>
            {currentArticlesData?.map((article, i) => (
              <BlogItem
                id={article._id}
                key={i}
                isAdmin={false}
                image={article.image?.url}
                description={article.description}
                title={article.title}
              />
            ))}
          </Styles.BlogItemsWrapper>
          <PaginationBar
            currentPage={currentPage}
            totalCount={articles.length}
            pageSize={PageSize}
            onPageChange={(page: string | number) =>
              setCurrentPage(Number(page))
            }
            siblingCount={1}
          />
          <Footer />
        </Styles.PageWrapper>
      )}
    </>
  );
};

export default BlogPage;
