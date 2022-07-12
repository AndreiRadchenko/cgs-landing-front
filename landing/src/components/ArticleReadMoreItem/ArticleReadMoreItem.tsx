import React from "react";
import * as Styles from "./ArticleReadMoreItem.styled";
import { IArticle, IView, IViews } from "../../types/Admin/Response.types";
import Link from "next/link";
import AdminBlackButton from "../Admin/Global/AdminBlackButton";
import Image from "next/image";
import viewsIcon from "../../../public/viewsIcon.svg";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminBlogService } from "../../services/adminBlogPage";

interface IArticleReadMore {
  article: IArticle;
  view: number | undefined;
}

const ArticleReadMoreItem = ({ article, view }: IArticleReadMore) => {
  const navigation = useRouter();

  return (
    <Styles.Wrapper>
      {article.image.url ? (
        <Styles.Image
          src={article.image.url}
          onClick={() => navigation.push(`/blog/${article.url}`)}
        />
      ) : (
        <Styles.NoImageArticleReadMore />
      )}
      <Styles.ViewsWrapper>
        <Image src={viewsIcon} alt="views icon" />
        <Styles.AmountViews>{view}</Styles.AmountViews>
      </Styles.ViewsWrapper>
      <Styles.TitleWrapper>
        <Styles.Title onClick={() => navigation.push(`/blog/${article.url}`)}>
          {article.title}
        </Styles.Title>
        <Styles.TitleDiv />
      </Styles.TitleWrapper>
      <Styles.Description>{article.description}</Styles.Description>
      <a href={`/blog/${article.url}`}>
        <Styles.ReadMoreButton>Read more</Styles.ReadMoreButton>
      </a>
    </Styles.Wrapper>
  );
};

export default ArticleReadMoreItem;
