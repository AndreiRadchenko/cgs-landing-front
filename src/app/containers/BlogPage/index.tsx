import usePagination from "app/components/Admin/Hooks";
import Article from "app/components/Article/article.component";
import BlogArticle from "app/components/BlogArticle/BlogArticle";
import Pagination from "app/components/shared/Pagination/pagination.component";
import React from "react";
import { IBlogArticle } from "types/components";
import * as Styled from "../../components/BlogArticle/BlogArticle.styles";
import { v4 as uuidv4 } from "uuid";

import { GlobalNoUserSelectStyle } from "../../../../styles/global-no-user-select";

export const BlogPage = ({ articles }: { articles: IBlogArticle[] }) => {
  const [mostViewedArticle, ...otherArticles] = articles;

  const [
    paginatedDataMarkUp,
    currentPage,
    handleDecrease,
    handleIncrease,
    numberOfPages,
    paginationArray,
    setCurrentPage,
  ]: any = usePagination(otherArticles, 4);

  const mapToProps = {
    paginatedDataMarkUp,
    currentPage,
    handleDecrease,
    handleIncrease,
    numberOfPages,
    paginationArray,
    setCurrentPage,
  };

  return (
    <div className="main-wraper">
      <GlobalNoUserSelectStyle />
      <Article
        title="Our articles"
        desc={
          "Here you can stay in touch with us, knowing all the newest from\nthe world of IT and business!"
        }
      >
        <Styled.Wrapper>
          <Styled.FeaturedArticle key={uuidv4()}>
            <BlogArticle article={mostViewedArticle} />
          </Styled.FeaturedArticle>
          {paginatedDataMarkUp.map((article) => (
            <Styled.ArticleWrapper key={article.id}>
              <BlogArticle article={article} />
            </Styled.ArticleWrapper>
          ))}
          <div>
            <Pagination {...mapToProps} />
          </div>
        </Styled.Wrapper>
      </Article>
    </div>
  );
};
