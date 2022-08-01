import React, { FC } from "react";
import * as Styles from "./ArticleDescription.styled";
import { ITextBlog } from "../../types/Admin/Response.types";

interface IDescription {
  content: ITextBlog[];
}

const ArticleDescription: FC<IDescription> = ({ content }) => {
  return (
    <Styles.Wrapper>
      {content.map((block, index) => {
        return block.text ? (
          <Styles.Description
            key={index}
            dangerouslySetInnerHTML={{ __html: block.text }}
          ></Styles.Description>
        ) : block.subtitle ? (
          <Styles.TitleWrapper key={index}>
            <Styles.SubtitleTag>{block.subNumber}</Styles.SubtitleTag>
            <Styles.Title
              as={
                (block.tagName &&
                  (block.tagName as keyof JSX.IntrinsicElements)) ||
                "h2"
              }
            >
              {block.subtitle}
            </Styles.Title>
          </Styles.TitleWrapper>
        ) : null;
      })}
    </Styles.Wrapper>
  );
};

export default ArticleDescription;
