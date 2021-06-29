import React from "react";
import * as Styled from "./article.styles";
import { IArticle } from "../../../types/components/index";

const Article: React.FC<IArticle> = (props) => (
  <Styled.Wrapper id={props?.id}>
    <Styled.Title>{props?.title}</Styled.Title>
    <Styled.HorizontalSep />
    {props?.desc && <Styled.SubTitle>{props?.desc.split('\n').map((item, idx) => (
      <span key={idx}>
        {item}
        <br />
      </span>
    ))}</Styled.SubTitle>}
    {props?.children}
  </Styled.Wrapper>
);

export default Article;
