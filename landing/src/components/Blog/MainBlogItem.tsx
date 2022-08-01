import React from "react";
import * as Styled from "../../styles/Blog.styled";
import { IArticle } from "../../types/Admin/Response.types";
import Watch from "../../../public/Watch.svg";
import Timer from "../../../public/Timer.svg";

interface IMainBlogItem {
  article: IArticle;
  views?: number;
}

const MainBlogItem = ({ article, views }: IMainBlogItem) => {
  return (
    <Styled.MainBlogItemContainer>
      <Styled.MainBlogItemImage src={article.image.url} />
      <Styled.FlexRowContainer>
        <Styled.MainBlogItemTag>{article.tags[0]}</Styled.MainBlogItemTag>
      </Styled.FlexRowContainer>
      <Styled.MainBlogItemTitle>
        <a href={`/blog/${article.url}`}>{article.title}</a>
      </Styled.MainBlogItemTitle>
      <Styled.MainBlogItemDescription>
        {article.description}
      </Styled.MainBlogItemDescription>
      <Styled.GeneralInfo>
        <Styled.BlogItemRowContainer>
          <Styled.MainBlogAuthor>{`By ${article.author.name} / ${article.author.specialization}`}</Styled.MainBlogAuthor>
          <Styled.WatchContainer>
            <Styled.BlogItemWatchIcon src={Watch.src} />
            <Styled.WatchCount>{views || 0}</Styled.WatchCount>
          </Styled.WatchContainer>
        </Styled.BlogItemRowContainer>
        <Styled.WatchContainer>
          <Styled.TimerIcon src={Timer.src} />
          <Styled.GrayText>{`${article.minutesToRead} min`}</Styled.GrayText>
        </Styled.WatchContainer>
      </Styled.GeneralInfo>
      <Styled.SliderDotsContainer>
        <Styled.SliderDot className={"current"} />
        <Styled.SliderDot />
        <Styled.SliderDot />
      </Styled.SliderDotsContainer>
    </Styled.MainBlogItemContainer>
  );
};

export default MainBlogItem;
