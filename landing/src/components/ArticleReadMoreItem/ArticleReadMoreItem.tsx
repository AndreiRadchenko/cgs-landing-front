import React from "react";
import * as Styles from "./ArticleReadMoreItem.styled";
import { IArticle } from "../../types/Admin/Response.types";
import Link from "next/link";

interface IArticleReadMore {
  article: IArticle;
}

const ArticleReadMoreItem = ({ article }: IArticleReadMore) => {
  return (
    <Link href={`/blog/${article.url}`} passHref>
      <Styles.Wrapper>
        <Styles.Image src={article.image.url} />
        <Styles.Title>{article.title}</Styles.Title>
        <Styles.Description>{article.description}</Styles.Description>
      </Styles.Wrapper>
    </Link>
  );
};

export default ArticleReadMoreItem;
