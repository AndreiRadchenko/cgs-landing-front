import React from "react";
import parse from "html-react-parser";
import * as Styles from "./BlogItem.styled";
import { IBlogItemProps } from "../../types/Admin/Blog.types";

const BlogItem = ({ isAdmin = false, children, item }: IBlogItemProps) => {
  const blogDate = () => {
    if (item.scheduleArticle) {
      const date = new Date(item.scheduleArticle);
      const month = date.getMonth() + 1;

      return (
        <span>
          <strong>Scheduled for</strong>{" "}
          {` ${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}.${
            month < 10 ? `0${month}` : month
          }.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`}
        </span>
      );
    }
    if (item.updatedOn) {
      const date = new Date(item.updatedOn);
      const month = date.getMonth() + 1;

      return (
        <span>
          <strong>Updated on</strong>
          {` ${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}.${
            month < 10 ? `0${month}` : month
          }.${date.getFullYear()}`}{" "}
        </span>
      );
    }
    if (item.date) {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;

      return `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}.${
        month < 10 ? `0${month}` : month
      }.${date.getFullYear()}`;
    }
  };

  return (
    <Styles.BlogItemContainer isAdmin={isAdmin}>
      {isAdmin ? (
        <Styles.BlogItem isAdmin={isAdmin}>
          <Styles.BlogContentWrapper>
            <Styles.BlogItemInfo>
              <Styles.BlogDateTagWrapper>
                <Styles.Date>{blogDate()}</Styles.Date>
                <Styles.Tag>{item.tags[0]}</Styles.Tag>
              </Styles.BlogDateTagWrapper>
              <Styles.BlogItemTitle isAdmin={isAdmin}>
                {item.title}
              </Styles.BlogItemTitle>
              <Styles.BlogItemDescription isAdmin={isAdmin} className="admin">
                {parse(item.description)}
              </Styles.BlogItemDescription>
            </Styles.BlogItemInfo>
            <Styles.BlogItemImage
              src={item.image?.url}
              alt="blog admin item image"
            />
          </Styles.BlogContentWrapper>
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
