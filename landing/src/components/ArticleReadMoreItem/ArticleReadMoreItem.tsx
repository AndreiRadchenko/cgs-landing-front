import React from "react";
import { useRouter } from "next/router";

import * as Styles from "./ArticleReadMoreItem.styled";

import { IArticleReadMoreProps } from "../../types/Blog.types";

import viewsIcon from "../../../public/Watch.svg";

const ArticleReadMoreItem = ({ article }: IArticleReadMoreProps) => {
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
      {article.image?.url ? (
        <Styles.Image
          src={article.image.url}
          onClick={() => router.push(`/blog/${article.url}`)}
        />
      ) : (
        <Styles.NoImageArticleReadMore />
      )}
      <Styles.ViewsWrapper>
        <Styles.ArticleWatchIcon src={viewsIcon.src} alt="views icon" />
        <Styles.AmountViews>{article.views || 0}</Styles.AmountViews>
      </Styles.ViewsWrapper>
      <Styles.TitleWrapper>
        <Styles.Title>
          <a href={`/blog/${article.url}`} onClick={handleClick}>
            {article.title}
          </a>
        </Styles.Title>
      </Styles.TitleWrapper>
      <Styles.Description
        dangerouslySetInnerHTML={{ __html: article.description }}
      />
      <Styles.ReadMoreButton>
        <a href={`/blog/${article.url}`} onClick={handleClick}>
          Read more
        </a>
      </Styles.ReadMoreButton>
    </Styles.Wrapper>
  );
};

export default ArticleReadMoreItem;
