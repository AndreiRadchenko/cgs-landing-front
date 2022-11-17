import React from "react";
import parse from "html-react-parser";
import * as Styles from "./BlogItem.styled";
import { IArticle } from "../../types/Admin/Response.types";
import TagItem from "../Admin/Global/Blog/TagItem";

interface IBlogItemProps {
  item: IArticle;
  isAdmin?: boolean;
  children?: React.ReactNode;
}

const BlogItem = ({ isAdmin = false, children, item }: IBlogItemProps) => {
  const blogDate = () => {
    if (item.scheduleArticle) {
      const date = new Date(item.scheduleArticle);
      return (
        <span>
          <strong>Scheduled for</strong>{" "}
          {` ${date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()}.${
            date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
          }.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`}
        </span>
      );
    }
    if (item.updatedOn) {
      const date = new Date(item.updatedOn);
      return (
        <span>
          <strong>Updated on</strong>
          {` ${date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()}.${
            date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
          }.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`}{" "}
        </span>
      );
    }
    if (item.date) {
      const date = new Date(item.date);
      return `${date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()}.${
        date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
      }.${date.getFullYear()}`;
    }
  };

  return (
    <Styles.BlogItemContainer isAdmin={isAdmin}>
      {isAdmin ? (
        <Styles.BlogItem isAdmin={isAdmin}>
          <Styles.BlogItemInfo>
            <Styles.BlogDateTagWrapper>
              <Styles.Date>{blogDate()}</Styles.Date>
              <Styles.Tag>{item.tags[0]}</Styles.Tag>
            </Styles.BlogDateTagWrapper>
            <Styles.BlogItemTitle isAdmin={isAdmin}>
              {item.title}
            </Styles.BlogItemTitle>
            <Styles.BlogItemDescription isAdmin={isAdmin}>
              {item.description}
            </Styles.BlogItemDescription>
          </Styles.BlogItemInfo>
          <Styles.BlogItemImage
            src={item.image?.url}
            alt="blog admin item image"
          />
          {children}
        </Styles.BlogItem>
      ) : (
        <a href={`/blog/${item.url}`}>
          <Styles.BlogItem isAdmin={isAdmin}>
            <Styles.BlogItemInfo>
              <Styles.BlogItemTitle isAdmin={isAdmin}>
                {item.title}
              </Styles.BlogItemTitle>
              <Styles.BlogItemDescription isAdmin={isAdmin}>
                {item.description}
              </Styles.BlogItemDescription>
            </Styles.BlogItemInfo>
            <Styles.BlogItemImage src={item.image?.url} alt="blog item image" />
            {children}
          </Styles.BlogItem>
        </a>
      )}
    </Styles.BlogItemContainer>
  );
};

export default BlogItem;
