import React from "react";
import parse from "html-react-parser";
import * as Styled from "../../styles/Blog.styled";
import { IArticle } from "../../types/Admin/Response.types";
import Arrow from "../../../public/BlogDecorations/MainPage/Arrow.svg";
import { useRouter } from "next/router";
interface IMainBlogItem {
  article: IArticle;
  filters: string[];
}

const SmallArticleItem = ({ article, filters }: IMainBlogItem) => {
  const parseDate = (date: string) => {
    return date.split("-").reverse().join(".");
  };

  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(
      {
        pathname: `/blog/${article.url}`,
        query: { filters },
      },
      `/blog/${article.url}`
    );
  };

  return (
    <Styled.SmallArticleContainer>
      <Styled.SmallGeneralInfo>
        <Styled.Date>{parseDate(article.date)}</Styled.Date>
        <a href={`/blog/${article.url}`} onClick={handleClick}>
          <Styled.Arrow src={Arrow.src} alt="arrow image" />
        </a>
      </Styled.SmallGeneralInfo>
      <Styled.SmallArticleItemTitle>
        <a href={`/blog/${article.url}`} onClick={handleClick}>
          {article.title}
        </a>
      </Styled.SmallArticleItemTitle>
      <Styled.SmallArticleItemDescription>
        {parse(article.description)}
      </Styled.SmallArticleItemDescription>
    </Styled.SmallArticleContainer>
  );
};

export default SmallArticleItem;
