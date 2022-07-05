import React from "react";
import ArticleReadMoreItem from "../ArticleReadMoreItem/ArticleReadMoreItem";
import * as Styles from "./ArticleReadMore.styled";
import { IArticle } from "../../types/Admin/Response.types";

interface IArticleReadMore {
  readMore: IArticle[];
}

const ArticleReadMore = ({ readMore }: IArticleReadMore) => {
  return readMore.length > 0 ? (
    <Styles.Wrapper>
      <Styles.Title>Read more:</Styles.Title>
      <Styles.ReadMoreItemsWrapper>
        {readMore.map((article) => (
          <ArticleReadMoreItem key={article._id} article={article} />
        ))}
      </Styles.ReadMoreItemsWrapper>
    </Styles.Wrapper>
  ) : (
    <Styles.Space></Styles.Space>
  );
};

export default ArticleReadMore;
