import Timer from "../../../public/Timer.svg";
import React, { FC } from "react";
import * as Styles from "./ArticleAuthor.styled";
import { IAuthor } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/Blog.styled";
import Watch from "../../../public/Watch.svg";
import AuthorPlaceholder from "../../../public/authorPlaceholder.png";

interface IArticleAuthor {
  author: IAuthor;
  date: string;
  update: string;
  time: number;
  views?: number;
}

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
            src={author.image.url ? author.image.url : AuthorPlaceholder.src}
          />
        }
        <Styles.AuthorInfoWrapper>
          <Styles.Container>
            <Styles.AuthorName>
              By {author.name} / {author.specialization}
            </Styles.AuthorName>
            <Styles.SpaceBetween>
              <Styled.ArticleWatchContainer>
                <Styled.WatchIcon src={Watch.src} />
                <Styled.WatchCountArticle>
                  {views || 0}
                </Styled.WatchCountArticle>
              </Styled.ArticleWatchContainer>
              <Styled.ArticleTimerContainer>
                <Styled.TimerIcon src={Timer.src} />
                <Styled.GrayText>{`${time} min`}</Styled.GrayText>
              </Styled.ArticleTimerContainer>
            </Styles.SpaceBetween>
          </Styles.Container>
        </Styles.AuthorInfoWrapper>
      </Styles.Wrapper>
      <Styles.DatesContainer>
        <Styled.GrayText>Published on {formatDate(date)}</Styled.GrayText>
        <Styled.GrayText>
          {update && `Updated on ${formatDate(update)}`}
        </Styled.GrayText>
      </Styles.DatesContainer>
    </>
  );
};

export default ArticleAuthor;
