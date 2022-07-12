import React from "react";
import * as Styles from "./ArticleReadMoreItem.styled";
import { IArticle } from "../../types/Admin/Response.types";
import Image from "next/image";
import viewsIcon from "../../../public/viewsIcon.svg";
import { useRouter } from "next/router";

interface IArticleReadMore {
  article: IArticle;
  view: number | undefined;
}

const ArticleReadMoreItem = ({ article, view }: IArticleReadMore) => {
  const navigation = useRouter();

  return (
    <Styles.Wrapper>
      <Styles.Image
        src={article.image.url}
        onClick={() => navigation.push(`/blog/${article.url}`)}
      />
      <Styles.ViewsWrapper>
        <Image src={viewsIcon} alt="views icon" />
        <Styles.AmountViews>{view}</Styles.AmountViews>
      </Styles.ViewsWrapper>
      <Styles.Title>{article.title}</Styles.Title>
      <Styles.Description>{article.description}</Styles.Description>
      <a href={`/blog/${article.url}`}>
        <Styles.ReadMoreButton>Read more</Styles.ReadMoreButton>
      </a>
    </Styles.Wrapper>
  );
};

export default ArticleReadMoreItem;
