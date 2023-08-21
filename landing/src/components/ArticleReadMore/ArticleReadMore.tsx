import React from "react";

import ArticleReadMoreItem from "../ArticleReadMoreItem/ArticleReadMoreItem";
import BlogItem from "../Blog/BlogItem";

import * as Styles from "./ArticleReadMore.styled";

import { IArticleReadMore } from "../../types/Blog.types";

import { useWindowDimension } from "../../hooks/useWindowDimension";

const ArticleReadMore = ({ readMore }: IArticleReadMore) => {
  const { width } = useWindowDimension();

  return readMore.length > 0 ? (
    <Styles.Wrapper>
      <Styles.TitleWrapper>
        <Styles.Title>READ MORE:</Styles.Title>
      </Styles.TitleWrapper>
      <Styles.ReadMoreItemsWrapper>
        {readMore.map((article) =>
          width && width >= 768 ? (
            <ArticleReadMoreItem key={article._id} article={article} />
          ) : (
            <BlogItem article={article} key={article._id} />
          )
        )}
      </Styles.ReadMoreItemsWrapper>
    </Styles.Wrapper>
  ) : (
    <Styles.Space></Styles.Space>
  );
};

export default ArticleReadMore;
