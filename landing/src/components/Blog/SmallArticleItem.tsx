import React from "react";
import * as Styled from "../../styles/Blog.styled";
import { IArticle } from "../../types/Admin/Response.types";
import Arrow from "../../../public/BlogDecorations/MainPage/Arrow.svg";
interface IMainBlogItem {
  article: IArticle;
}

const SmallArticleItem = ({ article }: IMainBlogItem) => {
  const parseDate = (date: string) => {
    return date.split("-").reverse().join(".");
  };

  return (
    <Styled.SmallArticleContainer>
      <Styled.SmallGeneralInfo>
        <Styled.Date>{parseDate(article.date)}</Styled.Date>
        <a href={`/blog/${article.url}`}>
          <Styled.Arrow src={Arrow.src} />
        </a>
      </Styled.SmallGeneralInfo>
      <Styled.SmallArticleItemTitle>
        <a href={`/blog/${article.url}`}>{article.title}</a>
      </Styled.SmallArticleItemTitle>
      <Styled.SmallArticleItemDescription>
        {article.description}
      </Styled.SmallArticleItemDescription>
    </Styled.SmallArticleContainer>
  );
};

export default SmallArticleItem;
