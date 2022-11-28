import React from "react";
import parse from "html-react-parser";
import * as Styled from "../../styles/Blog.styled";
import { IArticle } from "../../types/Admin/Response.types";
import Watch from "../../../public/Watch.svg";
import Timer from "../../../public/Timer.svg";
import { useRouter } from "next/router";

interface IMainBlogItem {
  article: IArticle;
  views?: number;
  filters?: string[];
}

const MainBlogItem = ({ article, views, filters }: IMainBlogItem) => {
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
    <Styled.MainBlogItemContainer>
      <Styled.MobileColumnReversedContainer>
        <Styled.MainBlogItemImage
          src={article.image?.url}
          alt="main blog image"
        />
        <Styled.FlexRowContainer>
          <Styled.MainBlogItemTag>{article.tags[0]}</Styled.MainBlogItemTag>
        </Styled.FlexRowContainer>
      </Styled.MobileColumnReversedContainer>
      <Styled.MobileColumnReversedContainer>
        <div>
          <Styled.MainBlogItemTitle>
            <a href={`/blog/${article.url}`} onClick={handleClick}>
              {article.title}
            </a>
          </Styled.MainBlogItemTitle>
          <Styled.MainBlogItemDescription>
            {parse(article.description)}
          </Styled.MainBlogItemDescription>
        </div>
        <Styled.GeneralInfo>
          <Styled.BlogItemRowContainer>
            <Styled.MainBlogAuthor>{`By ${article.author.name} / ${article.author.specialization}`}</Styled.MainBlogAuthor>
            <Styled.WatchContainer>
              <Styled.BlogItemWatchIcon src={Watch.src} alt="views icon" />
              <Styled.WatchCount>{views || 0}</Styled.WatchCount>
            </Styled.WatchContainer>
          </Styled.BlogItemRowContainer>
          <Styled.WatchContainer className="timer">
            <Styled.TimerIcon src={Timer.src} alt="timer icon" />
            <Styled.GrayText>{`${article.minutesToRead} min`}</Styled.GrayText>
          </Styled.WatchContainer>
        </Styled.GeneralInfo>
      </Styled.MobileColumnReversedContainer>
      <Styled.SliderDotsContainer>
        <Styled.SliderDot className={"current"} />
        <Styled.SliderDot />
        <Styled.SliderDot />
      </Styled.SliderDotsContainer>
    </Styled.MainBlogItemContainer>
  );
};

export default MainBlogItem;
