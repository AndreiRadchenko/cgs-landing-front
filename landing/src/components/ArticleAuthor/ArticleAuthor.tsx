import React, { FC } from "react";
import { useWindowDimension } from "../../hooks/useWindowDimension";

import * as Styles from "./ArticleAuthor.styled";
import * as Styled from "../../styles/Blog.styled";

import { IArticleAuthor } from "../../types/Blog.types";

import Timer from "../../../public/Timer.svg";
import Watch from "../../../public/Watch.svg";
import AuthorPlaceholder from "../../../public/authorPlaceholder.svg";

const ArticleAuthor: FC<IArticleAuthor> = ({
  author,
  update,
  date,
  time,
  views,
}) => {
  const formatDate = (date: string) => {
    return date.split("-").reverse().join(".");
  };

  return (
    <>
      <Styles.Wrapper>
        {
          <Styles.AuthorImage
            src={author.image?.url ? author.image.url : AuthorPlaceholder.src}
          />
        }
        <Styles.AuthorInfoWrapper>
          <Styles.Container>
            <Styles.AuthorName>
              By {author.name} / {author.specialization}
            </Styles.AuthorName>
            <Styles.SpaceBetween>
              <Styles.DatesContainer>
                {(update && (
                  <Styled.GrayText className="articleText">
                    {"Updated on "}
                    <Styled.TimeText>{formatDate(update)}</Styled.TimeText>
                  </Styled.GrayText>
                )) || (
                  <Styled.GrayText className="articleText">
                    {"Published on "}
                    <Styled.TimeText>{formatDate(date)}</Styled.TimeText>
                  </Styled.GrayText>
                )}
              </Styles.DatesContainer>
              <Styles.StatisticWrapper>
                <Styled.ArticleWatchContainer>
                  <Styled.WatchIcon src={Watch.src} alt="watch icon" />
                  <Styled.WatchCountArticle>
                    {views || 0}
                  </Styled.WatchCountArticle>
                </Styled.ArticleWatchContainer>
                <Styled.ArticleTimerContainer>
                  <Styled.TimerIcon src={Timer.src} alt="timer img" />
                  <Styled.GrayText className="articleText">
                    <Styled.TimeText>{time}</Styled.TimeText> min
                  </Styled.GrayText>
                </Styled.ArticleTimerContainer>
              </Styles.StatisticWrapper>
            </Styles.SpaceBetween>
          </Styles.Container>
        </Styles.AuthorInfoWrapper>
      </Styles.Wrapper>
    </>
  );
};

export default ArticleAuthor;
