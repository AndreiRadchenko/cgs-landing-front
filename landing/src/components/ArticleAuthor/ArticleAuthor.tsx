import Timer from "../../../public/Timer.svg";
import React, { FC } from "react";
import Views from "../../../public/viewsIcon.svg";
import * as Styles from "./ArticleAuthor.styled";
import { IAuthor } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/Blog.styled";
import Watch from "../../../public/Watch.png";

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
      <Styles.AuthorImage src={author.image.url} />
      <Styles.AuthorInfoWrapper>
        <Styles.Container>
          <Styles.AuthorName>
            By {author.name} / {author.specialization}
          </Styles.AuthorName>
          <Styles.SpaceBetween>
            <Styled.GrayText>{formatDate(date)}</Styled.GrayText>
            <Styled.FlexRowContainer>
              <Styled.WatchContainer>
                <Styled.WatchIcon src={Watch.src} />
                <Styled.WatchCount>{views}</Styled.WatchCount>
              </Styled.WatchContainer>
              <Styled.WatchContainer>
                <Styled.TimerIcon src={Timer.src} />
                <Styled.GrayText>{`${time} min`}</Styled.GrayText>
              </Styled.WatchContainer>
            </Styled.FlexRowContainer>
          </Styles.SpaceBetween>
        </Styles.Container>
      </Styles.AuthorInfoWrapper>
    </Styles.Wrapper>
  );
};

export default ArticleAuthor;
