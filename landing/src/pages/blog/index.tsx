import React, { useMemo, useState } from "react";
import parse from "html-react-parser";
import { Page } from "../../styles/Page.styled";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import Footer from "../../components/Footer/Footer";
import { useQuery } from "react-query";
import { IBlogResponse } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";
import PaginationBar from "../../components/PaginationBar/PaginationBar";
import BlogItem from "../../components/BlogItem/BlogItem";

import * as Styles from "../../styles/BlogPage.styled";
import { adminBlogService } from "../../services/adminBlogPage";
import Link from "next/link";
import { adminGlobalService } from "../../services/adminHomePage";
import * as Styled from "../../styles/AdminPage";
import Head from "next/head";

interface IBlogData {
  data: IBlogResponse | undefined;
  isLoading: boolean;
}

const PageSize = 5;

const BlogPage = () => {
  const { data, isLoading }: IBlogData = useQuery(queryKeys.getBlogPage, () =>
    adminBlogService.getBlogPage()
  );

  useQuery(queryKeys.getFullHomePage, () => adminGlobalService.getFullPage());

  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentArticlesData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data?.articles.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data?.articles]);

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>
      <Styles.PageWrapper>
        <div>
          <Styles.HeaderContainer>
            <HeaderNav />
          </Styles.HeaderContainer>
          {!currentArticlesData || !data?.articles.length ? (
            <Styled.AdminUnauthorizedModal>
              Articles is not defined :(
            </Styled.AdminUnauthorizedModal>
          ) : (
            <>
              <Link href={`blog/${currentArticlesData[0].url}`} passHref>
                <Styles.BlogItemContainer>
                  <Styles.BannerImage src={currentArticlesData[0].image.url} />
                  <Styles.PageTitle>
                    {currentArticlesData[0].title}
                  </Styles.PageTitle>
                  <Styles.PageDescription>
                    {currentArticlesData[0].description}
                  </Styles.PageDescription>
                </Styles.BlogItemContainer>
              </Link>
              <Styles.BlogItemsWrapper>
                {currentArticlesData.map((article, i) =>
                  i === 0 ? null : (
                    <BlogItem
                      url={article.url}
                      key={i}
                      isAdmin={false}
                      image={article.image?.url}
                      description={article.description}
                      title={article.title}
                    />
                  )
                )}
              </Styles.BlogItemsWrapper>
              <PaginationBar
                currentPage={currentPage}
                totalCount={data.articles.length}
                pageSize={PageSize}
                onPageChange={(page: string | number) =>
                  setCurrentPage(Number(page))
                }
                siblingCount={1}
              />
            </>
          )}
        </div>
        <Footer isGreenLine={false} />
      </Styles.PageWrapper>
    </>
  );
};

export default BlogPage;
