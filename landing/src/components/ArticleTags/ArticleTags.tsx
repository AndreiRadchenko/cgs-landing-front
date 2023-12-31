import React from "react";
import { FC } from "react";
import Router from "next/router";

import * as Styles from "./ArticleTags.styled";

import { IArticleTags } from "../../types/Blog.types";

const ArticleTags: FC<IArticleTags> = ({ tags }) => {
  const handleTagClick = (tag: string) => {
    Router.push(`/blog?tag=${tag}`);
  };

  return (
    <Styles.Wrapper>
      {tags.map((tag, index) => (
        <Styles.TagItem key={index} onClick={() => handleTagClick(tag)}>
          {tag}
        </Styles.TagItem>
      ))}
    </Styles.Wrapper>
  );
};

export default ArticleTags;
