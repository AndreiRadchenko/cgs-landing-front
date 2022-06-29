import * as Styles from "./ArticleDescription.styled";
import { ITextBlog } from "../../types/Admin/Response.types";
import React, { FC } from "react";

interface IDescription {
  content: ITextBlog[];
}

const ArticleDescription: FC<IDescription> = ({ content }) => {
  return (
    <Styles.Wrapper>
      {content.map((block, index) =>
        block.text ? (
          <Styles.Description
            key={index}
            dangerouslySetInnerHTML={{ __html: block.text }}
          ></Styles.Description>
        ) : (
          <Styles.TitleWrapper key={index}>
            <Styles.SubtitleTag>{block.subNumber}</Styles.SubtitleTag>
            <Styles.Title>
              The subtitle of the article is for example
            </Styles.Title>
          </Styles.TitleWrapper>
        )
      )}
    </Styles.Wrapper>
  );
};

export default ArticleDescription;
