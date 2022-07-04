import * as Styles from "./ArticleDescription.styled";
import { ITextBlog } from "../../types/Admin/Response.types";
import React, { FC } from "react";

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
        ) : (
          <Styles.TitleWrapper key={index}>
            <Styles.SubtitleTag>{block.subNumber}</Styles.SubtitleTag>
            <Styles.Title
            // as={block.subNumber?.replace("<", "").replace(">", "")}
            >
              {block.subtitle}
            </Styles.Title>
          </Styles.TitleWrapper>
        );
      })}
    </Styles.Wrapper>
  );
};

export default ArticleDescription;
