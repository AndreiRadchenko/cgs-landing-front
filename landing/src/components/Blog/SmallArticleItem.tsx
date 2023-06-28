import React from "react";
import parse from "html-react-parser";
import * as Styled from "../../styles/Blog.styled";
import { useRouter } from "next/router";
import { ISmallArticleItem } from "../../types/Blog.types";
import ButtonArrow from "../../utils/ButtonArrow";

const SmallArticleItem = ({ article, filters }: ISmallArticleItem) => {
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
        <Styled.ArrowIconLink>
          <a href={`/blog/${article.url}`} onClick={handleClick}>
            <Styled.ArrowContainer>
              <ButtonArrow />
            </Styled.ArrowContainer>
          </a>
        </Styled.ArrowIconLink>
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
