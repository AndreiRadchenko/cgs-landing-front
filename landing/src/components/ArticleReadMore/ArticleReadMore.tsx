import React from "react";
import ArticleReadMoreItem from "../ArticleReadMoreItem/ArticleReadMoreItem";
import * as Styles from "./ArticleReadMore.styled";
import { IArticle } from "../../types/Admin/Response.types";

interface IArticleReadMore {
  readMore: IArticle[];
  findViews: (url: string) => number | undefined;
}

const ArticleReadMore = ({ readMore, findViews }: IArticleReadMore) => {
  return readMore.length > 0 ? (
    <Styles.Wrapper>
      <Styles.TitleWrapper>
        <Styles.Title>READ MORE:</Styles.Title>
      </Styles.TitleWrapper>
      <Styles.ReadMoreItemsWrapper>
        {readMore.map((article) => (
          <ArticleReadMoreItem
            key={article._id}
            article={article}
            view={findViews(article.url)}
          />
        ))}
      </Styles.ReadMoreItemsWrapper>
    </Styles.Wrapper>
  ) : (
    <Styles.Space></Styles.Space>
  );
};

export default ArticleReadMore;
