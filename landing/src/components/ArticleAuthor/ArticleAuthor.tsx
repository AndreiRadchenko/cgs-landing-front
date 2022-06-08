import React from "react";
import Timer from "../../../public/Timer.svg";
import Author from "../../../public/Author.jpg";

import * as Styles from "./ArticleAuthor.styled";

const ArticleAuthor = () => {
  return (
    <Styles.Wrapper>
      <Styles.AuthorWrapper>
        <Styles.AuthorImage src={Author.src} />
        <Styles.AuthorInfoWrapper>
          <Styles.AuthorNameWrapper>
            <Styles.AuthorName>By Alex Alex</Styles.AuthorName>
            <Styles.AuthorType> / writer</Styles.AuthorType>
          </Styles.AuthorNameWrapper>
          <Styles.AuthorDate>22.05.2022</Styles.AuthorDate>
        </Styles.AuthorInfoWrapper>
      </Styles.AuthorWrapper>
      <Styles.TimeWrapper>
        <Styles.TimerImage src={Timer.src} />
        <Styles.Time>2 min</Styles.Time>
      </Styles.TimeWrapper>
    </Styles.Wrapper>
  );
};

export default ArticleAuthor;
