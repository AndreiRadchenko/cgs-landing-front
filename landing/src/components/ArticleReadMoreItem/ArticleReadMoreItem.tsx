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
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(
      {
        pathname: `/blog/${article.url}`,
        query: { fromArticle: true },
      },
      `/blog/${article.url}`
    );
  };

  return (
    <Styles.Wrapper>
      {article.image.url ? (
        <Styles.Image
          src={article.image.url}
          onClick={() => router.push(`/blog/${article.url}`)}
        />
      ) : (
        <Styles.NoImageArticleReadMore />
      )}
      <Styles.ViewsWrapper>
        <Styles.ArticleWatchIcon src={viewsIcon.src} alt="views icon" />
        <Styles.AmountViews>{view || 0}</Styles.AmountViews>
      </Styles.ViewsWrapper>
      <Styles.TitleWrapper>
        <Styles.Title>
          <a href={`/blog/${article.url}`} onClick={handleClick}>
            {article.title}
          </a>
        </Styles.Title>
      </Styles.TitleWrapper>
      <Styles.Description>{article.description}</Styles.Description>
      <Styles.ReadMoreButton>
        <a href={`/blog/${article.url}`} onClick={handleClick}>
          Read more
        </a>
      </Styles.ReadMoreButton>
    </Styles.Wrapper>
  );
};

export default ArticleReadMoreItem;
