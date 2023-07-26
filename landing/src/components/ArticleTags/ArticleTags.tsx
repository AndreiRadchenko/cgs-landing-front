import React from "react";
import * as Styles from "./ArticleTags.styled";
import { FC } from "react";
import Link from "next/link";
import Router from "next/router";

interface IArticleTags {
  tags: string[];
}
const ArticleTags: FC<IArticleTags> = ({ tags }) => {
  const handleTagClick = (tag: string) => {
    Router.push(`/blog?tag=${tag}`);
  };

  return (
    <Styles.Wrapper>
      {tags.map((tag, index) => (
          <Styles.TagItem key={index} onClick={() => handleTagClick(tag)}>{tag}</Styles.TagItem>
      ))}
    </Styles.Wrapper>
  );
};

export default ArticleTags;
