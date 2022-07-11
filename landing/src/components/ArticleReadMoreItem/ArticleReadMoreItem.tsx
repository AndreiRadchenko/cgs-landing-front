import React from "react";
import * as Styles from "./ArticleReadMoreItem.styled";
import { IArticle } from "../../types/Admin/Response.types";
import Link from "next/link";
import AdminBlackButton from "../Admin/Global/AdminBlackButton";
import Image from "next/image";
import viewsIcon from "../../../public/viewsIcon.svg";

interface IArticleReadMore {
  article: IArticle;
}

const ArticleReadMoreItem = ({ article }: IArticleReadMore) => {
  return (
    <Styles.Wrapper>
      <Styles.Image src={article.image.url} />
      <Styles.ViewsWrapper>
        <Image src={viewsIcon} alt="views icon" />
        <Styles.AmountViews>3081</Styles.AmountViews>
      </Styles.ViewsWrapper>
      <Styles.Title>{article.title}</Styles.Title>
      <Styles.Description>{article.description}</Styles.Description>
      <Link href={`/blog/${article.url}`} passHref>
        <AdminBlackButton text="Read more" />
      </Link>
    </Styles.Wrapper>
  );
};

export default ArticleReadMoreItem;
