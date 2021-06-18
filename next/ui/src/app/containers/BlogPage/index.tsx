import usePagination from "app/components/Admin/Hooks";
import Article from "app/components/Article/article.component";
import BlogArticle from "app/components/BlogArticle/BlogArticle";
import Pagination from "app/components/shared/Pagination/pagination.component";
import React from "react";
import { IBlogArticle } from "types/components";
import { scrollEA } from "../../../services/event";
import * as Styled from "../../components/BlogArticle/BlogArticle.styles";

export const BlogPage = ({ articles }: { articles: IBlogArticle[] }) => {
  React.useEffect(() => {
    scrollEA("data-scroll");
  }, []);

  const [
    paginatedDataMarkUp,
    curentPage,
    handleDecrease,
    handleIncrease,
    numberOfPages,
    paginationArray,
    setCurrentPage,
  ]: any = usePagination(articles, 4);

  const mapToProps = {
    paginatedDataMarkUp,
    curentPage,
    handleDecrease,
    handleIncrease,
    numberOfPages,
    paginationArray,
    setCurrentPage,
  };

  return (
    <div className="main-wraper">
      <Article
        title="Our stories"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      >
        <Styled.Wrapper>
          {paginatedDataMarkUp &&
            paginatedDataMarkUp.map((article, index) => {
              if (index === 0) {
                return (
                  <Styled.FeaturedArticle>
                    <BlogArticle article={article} />
                  </Styled.FeaturedArticle>
                );
              } else {
                return (
                  <Styled.ArticleWrapper>
                    <BlogArticle article={article} />
                  </Styled.ArticleWrapper>
                );
              }
            })}
          <div>
            <Pagination {...mapToProps} />
          </div>
        </Styled.Wrapper>
      </Article>
    </div>
  );
};
