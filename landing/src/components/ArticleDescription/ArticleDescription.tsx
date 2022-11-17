import React, { FC } from "react";
import * as Styles from "./ArticleDescription.styled";

interface IDescription {
  content: string;
}

const ArticleDescription: FC<IDescription> = ({ content }) => {
  return (
    <Styles.Wrapper>
      <Styles.Description
        dangerouslySetInnerHTML={{ __html: content }}
      ></Styles.Description>
    </Styles.Wrapper>
  );
};

export default ArticleDescription;
