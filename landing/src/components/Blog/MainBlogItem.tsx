import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import Image from "next/image";

import * as Styled from "../../styles/Blog.styled";

import { IMainBlogItem } from "../../types/Blog.types";

import Watch from "../../../public/Watch.svg";
import Timer from "../../../public/Timer.svg";

const MainBlogItem = ({
  article,
  filters,
  setIsMainSliderImageLoaded,
}: IMainBlogItem) => {
  const router = useRouter();
  const [onLoadCount, setOnLoadCount] = useState(0);
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

  const onMainImageLoad = () => {
    setOnLoadCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (setIsMainSliderImageLoaded && onLoadCount === 1) {
      setTimeout(() => {
        setIsMainSliderImageLoaded(true);
      }, 1000);
    }
  }, [onLoadCount]);

  return (
    <>
      <Styled.MobileColumnReversedContainer>
        <Styled.MainBlogItemImage>
          <Image
            src={article.image ? article.image.url : "/"}
            alt="main blog image"
            layout="fill"
            objectFit="contain"
            onLoad={onMainImageLoad}
          />
        </Styled.MainBlogItemImage>

        <Styled.TechContainer>
          <Styled.MainBlogItemTag>{article.tags[0]}</Styled.MainBlogItemTag>
        </Styled.TechContainer>
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
              <Styled.WatchCount>{article.views || 0}</Styled.WatchCount>
            </Styled.WatchContainer>
          </Styled.BlogItemRowContainer>
          <Styled.WatchContainer className="timer">
            <Styled.TimerIcon src={Timer.src} alt="timer icon" />
            <Styled.GrayText>{`${article.minutesToRead} min`}</Styled.GrayText>
          </Styled.WatchContainer>
        </Styled.GeneralInfo>
      </Styled.MobileColumnReversedContainer>
    </>
  );
};

export default MainBlogItem;
