import Timer from "../../../public/Timer.svg";
import React, { FC } from "react";
import * as Styles from "./ArticleAuthor.styled";
import { IAuthor } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/Blog.styled";
import Watch from "../../../public/Watch.svg";

interface IArticleAuthor {
  author: IAuthor;
  date: string;
  time: number;
  views?: number;
}

const ArticleAuthor: FC<IArticleAuthor> = ({ author, date, time, views }) => {
  const formatDate = (date: string) => {
    return date.split("-").reverse().join(".");
  };

  return (
    <Styles.Wrapper>
      {author.image.url && <Styles.AuthorImage src={author.image.url} />}
      <Styles.AuthorInfoWrapper>
        <Styles.Container>
          <Styles.AuthorName>
            By {author.name} / {author.specialization}
          </Styles.AuthorName>
          <Styles.SpaceBetween>
            <Styled.GrayText>{formatDate(date)}</Styled.GrayText>
            <Styled.FlexRowContainer>
              <Styled.ArticleWatchContainer>
                <Styled.WatchIcon src={Watch.src} />
                <Styled.WatchCount>{views || 0}</Styled.WatchCount>
              </Styled.ArticleWatchContainer>
              <Styled.ArticleTimerContainer>
                <Styled.TimerIcon src={Timer.src} />
                <Styled.GrayText>{`${time} min`}</Styled.GrayText>
              </Styled.ArticleTimerContainer>
            </Styled.FlexRowContainer>
          </Styles.SpaceBetween>
        </Styles.Container>
      </Styles.AuthorInfoWrapper>
    </Styles.Wrapper>
  );
};

export default ArticleAuthor;
