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
      <a href={`/blog/${article.url}`}>
        <Styled.SmallGeneralInfo>
          <Styled.Date>{parseDate(article.date)}</Styled.Date>
          <Styled.Arrow src={Arrow.src} />
        </Styled.SmallGeneralInfo>
        <Styled.SmallArticleItemTitle>
          {article.title}
        </Styled.SmallArticleItemTitle>
        <Styled.SmallArticleItemDescription>
          {article.description}
        </Styled.SmallArticleItemDescription>
      </a>
    </Styled.SmallArticleContainer>
  );
};

export default SmallArticleItem;
