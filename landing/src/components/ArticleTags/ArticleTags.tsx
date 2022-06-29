import React from "react";
import * as Styles from "./ArticleTags.styled";
import { FC } from "react";
import React from "react";
import Link from "next/link";

interface IArticleTags {
  tags: string[];
}
const ArticleTags: FC<IArticleTags> = ({ tags }) => {
  return (
    <Styles.Wrapper>
      {tags.map((tag, index) => (
        <Link href={`/blog/tags/${tag}`} passHref key={index}>
          <Styles.TagItem>{tag}</Styles.TagItem>
        </Link>
      ))}
    </Styles.Wrapper>
  );
};

export default ArticleTags;
