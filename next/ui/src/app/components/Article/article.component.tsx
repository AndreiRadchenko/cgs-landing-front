import React from "react";
import * as Styled from "./article.styles";
import { IArticle } from "../../../types/components/index";

import { addLineBreaks } from "helpers/addLineBreaks";

const Article: React.FC<IArticle> = (props) => (
  <Styled.Wrapper id={props?.id}>
    <Styled.Title>{props?.title}</Styled.Title>
    <Styled.HorizontalSep />
    {props?.desc && (
      <Styled.SubTitle>
        {typeof props.desc === "string" ? addLineBreaks(props.desc) : props.desc}
      </Styled.SubTitle>
    )}
    {props?.children}
  </Styled.Wrapper>
);

export default Article;
