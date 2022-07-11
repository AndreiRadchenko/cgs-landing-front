import React from "react";
import * as Styled from "../../styles/Blog.styled";
import Watch from "../../../public/Watch.png";
import Timer from "../../../public/Timer.svg";
import { IArticle } from "../../types/Admin/Response.types";

interface IBlogItem {
  article: IArticle;
}

const BlogItem = ({ article }: IBlogItem) => {
  const parseDate = (date: string) => {
    return date.split("-").reverse().join(".");
  };

  return (
    article && (
      <Styled.MarginContainer>
        <a href={`/blog/${article.url}`}>
          <Styled.HoverContainer>
            <Styled.BlogItemContainer>
              <Styled.FlexRowContainer>
                <Styled.BlogItemContent>
                  <Styled.FlexRowContainer>
                    <Styled.Date>{parseDate(article.date)}</Styled.Date>
                    <Styled.Tag>{article.tags[0]}</Styled.Tag>
                  </Styled.FlexRowContainer>
                  <Styled.BlogItemTitle>{article.title}</Styled.BlogItemTitle>
                  <Styled.BlogItemDescription>
                    {article.description}
                  </Styled.BlogItemDescription>
                </Styled.BlogItemContent>
                <Styled.BlogItemImage src={article.image.url} />
              </Styled.FlexRowContainer>
              <Styled.GeneralInfo>
                <Styled.FlexRowContainer>
                  <Styled.Author>{`By ${article.author.name} / ${article.author.specialization}`}</Styled.Author>
                  <Styled.WatchContainer>
                    <Styled.WatchIcon src={Watch.src} />
                    <Styled.WatchCount>463</Styled.WatchCount>
                  </Styled.WatchContainer>
                </Styled.FlexRowContainer>
                <Styled.WatchContainer>
                  <Styled.TimerIcon src={Timer.src} />
                  <Styled.GrayText>{`${article.minutesToRead} min`}</Styled.GrayText>
                </Styled.WatchContainer>
              </Styled.GeneralInfo>
            </Styled.BlogItemContainer>
            <Styled.HoverBlock>
              <Styled.HoverBlackBlock />
            </Styled.HoverBlock>
          </Styled.HoverContainer>
        </a>
      </Styled.MarginContainer>
    )
  );
};

export default BlogItem;
