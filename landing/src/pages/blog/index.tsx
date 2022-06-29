import React, { useMemo, useState } from "react";
import { Page } from "../../styles/Page.styled";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import Footer from "../../components/Footer/Footer";
import BannerImage from "../../../public/blog-banner.jpg";
import { useQuery } from "react-query";
import { IBlogResponse } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";
import PaginationBar from "../../components/PaginationBar/PaginationBar";
import BlogItem from "../../components/BlogItem/BlogItem";

import * as Styles from "../../styles/BlogPage.styled";
import { adminBlogService } from "../../services/adminBlogPage";

interface IHomeData {
  data: IBlogResponse | undefined;
  isLoading: boolean;
}

const PageSize = 5;

const BlogPage = () => {
  const { data, isLoading }: IHomeData = useQuery(queryKeys.getBlogPage, () =>
    adminBlogService.getBlogPage()
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentArticlesData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data?.articles.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data?.articles]);

  return (
    <>
      {!isLoading && data && (
        <Styles.PageWrapper>
          <Page>
            <HeaderNav />
            <Styles.PageHeaderWrapper>
              <Styles.BannerImage src={BannerImage.src} />
              <Styles.PageTitle>NFT. Explained</Styles.PageTitle>
              <Styles.PageDescription>
                The TA project manager's responsibility and roles will vary
                depending on the project, but there is a general framework you
                can easily follow. The TA project manager's responsibility and
                roles will vary depending on the project, but there is a general
                framework you can easily follow.
              </Styles.PageDescription>
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
            totalCount={data.articles.length}
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
