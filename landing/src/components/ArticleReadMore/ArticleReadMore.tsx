import React from "react";
import ArticleReadMoreItem from "../ArticleReadMoreItem/ArticleReadMoreItem";
import * as Styles from "./ArticleReadMore.styled";
import { IArticle } from "../../types/Admin/Response.types";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import BlogItem from "../Blog/BlogItem";

interface IArticleReadMore {
  readMore: IArticle[];
  findViews: (url: string) => number | undefined;
}

const ArticleReadMore = ({ readMore, findViews }: IArticleReadMore) => {
  const { width } = useWindowDimension();
  return readMore.length > 0 ? (
    <Styles.Wrapper>
      <Styles.TitleWrapper>
        <Styles.Title>READ MORE:</Styles.Title>
      </Styles.TitleWrapper>
      <Styles.ReadMoreItemsWrapper>
        {readMore.map((article) =>
          width && width > 768 ? (
            <ArticleReadMoreItem
              key={article._id}
              article={article}
              view={findViews(article.url)}
            />
          ) : (
            <BlogItem article={article} views={findViews(article.url)} />
          )
        )}
      </Styles.ReadMoreItemsWrapper>
    </Styles.Wrapper>
  ) : (
    <Styles.Space></Styles.Space>
  );
};

export default ArticleReadMore;
