import React from "react";
import * as Styled from "./article.styles";
import { IArticle } from "../../../types/components/index";

import { addLineBreaks } from "helpers/addLineBreaks";

const Article: React.FC<IArticle> = ({ id, title, desc, children, hideSepOnMobile = false }) => (
  <Styled.Wrapper id={id}>
    <Styled.Title>{title}</Styled.Title>
    <Styled.HorizontalSep hideOnMobile={hideSepOnMobile} />
    {desc && (
      <Styled.SubTitle>{typeof desc === "string" ? addLineBreaks(desc) : desc}</Styled.SubTitle>
    )}
    {children}
  </Styled.Wrapper>
);

export default Article;
