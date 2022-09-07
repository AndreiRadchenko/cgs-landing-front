import React from "react";
import * as Styles from "./ArticleReadMoreItem.styled";
import { IArticle } from "../../types/Admin/Response.types";
import viewsIcon from "../../../public/Watch.svg";
import { useRouter } from "next/router";

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
        <Styles.ArticleWatchIcon src={viewsIcon.src} alt="views icon" />
        <Styles.AmountViews>{view || 0}</Styles.AmountViews>
      </Styles.ViewsWrapper>
      <Styles.TitleWrapper>
        <Styles.Title onClick={() => navigation.push(`/blog/${article.url}`)}>
          {article.title}
        </Styles.Title>
      </Styles.TitleWrapper>
      <Styles.Description>{article.description}</Styles.Description>
      <Styles.ReadMoreButton
        onClick={() => navigation.push(`/blog/${article.url}`)}
      >
        Read more
      </Styles.ReadMoreButton>
    </Styles.Wrapper>
  );
};

export default ArticleReadMoreItem;
