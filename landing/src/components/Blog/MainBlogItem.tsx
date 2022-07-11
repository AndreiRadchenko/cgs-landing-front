import React from "react";
import * as Styled from "../../styles/Blog.styled";
import { IArticle } from "../../types/Admin/Response.types";
import Watch from "../../../public/Watch.png";
import Timer from "../../../public/Timer.svg";

interface IMainBlogItem {
  article: IArticle;
}

const MainBlogItem = ({ article }: IMainBlogItem) => {
  return (
    <a href={`/blog/${article.url}`}>
      <Styled.MainBlogItemContainer>
        <Styled.MainBlogItemImage src={article.image.url} />
        <Styled.FlexRowContainer>
          <Styled.MainBlogItemTag>{article.tags[0]}</Styled.MainBlogItemTag>
        </Styled.FlexRowContainer>
        <Styled.MainBlogItemTitle>{article.title}</Styled.MainBlogItemTitle>
        <Styled.MainBlogItemDescription>
          {article.description}
        </Styled.MainBlogItemDescription>
        <Styled.GeneralInfo>
          <Styled.FlexRowContainer>
            <Styled.MainBlogAuthor>{`By ${article.author.name} / ${article.author.specialization}`}</Styled.MainBlogAuthor>
            <Styled.WatchContainer>
              <Styled.WatchIcon src={Watch.src} />
              <Styled.WatchCount>1241</Styled.WatchCount>
            </Styled.WatchContainer>
          </Styled.FlexRowContainer>
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
    </a>
  );
};

export default MainBlogItem;
