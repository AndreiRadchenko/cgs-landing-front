import React from 'react';
import * as Styled from './article.styles';
import { IArticle } from '../../../types/components/index';

const Article: React.FC<IArticle> = (props) => {
  return (
    <Styled.Wrapper id={props.id}>
      <Styled.Title>{props.title}</Styled.Title>
      <Styled.HorizantalSep />
      {props.desc && <Styled.SubTitle>{props.desc}</Styled.SubTitle>}
      {props.children}
    </Styled.Wrapper>
  );
};
export default Article;
