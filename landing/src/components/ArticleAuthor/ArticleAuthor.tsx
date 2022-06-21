import Timer from "../../../public/Timer.svg";
import React, { FC } from "react";
import * as Styles from "./ArticleAuthor.styled";
import { IAuthor } from "../../types/Admin/Response.types";

interface IArticleAuthor {
  author: IAuthor;
  date: string;
  time: number;
}

const ArticleAuthor: FC<IArticleAuthor> = ({ author, date, time }) => {
  const formatDate = (date: string) => {
    return date.split("-").reverse().join(".");
  };

  return (
    <Styles.Wrapper>
      <Styles.AuthorWrapper>
        <Styles.AuthorImage src={author.image.url} />
        <Styles.AuthorInfoWrapper>
          <Styles.AuthorNameWrapper>
            <Styles.AuthorName>By {author.name}</Styles.AuthorName>
            <Styles.AuthorType> / {author.specialization}</Styles.AuthorType>
          </Styles.AuthorNameWrapper>
          <Styles.AuthorDate>{formatDate(date)}</Styles.AuthorDate>
        </Styles.AuthorInfoWrapper>
      </Styles.AuthorWrapper>
      <Styles.TimeWrapper>
        <Styles.TimerImage src={Timer.src} />
        <Styles.Time>&nbsp;{time} min</Styles.Time>
      </Styles.TimeWrapper>
    </Styles.Wrapper>
  );
};

export default ArticleAuthor;
