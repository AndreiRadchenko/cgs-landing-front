import React from 'react';
import * as Styled from './article.styles';
import { IArticle } from '../../../types/components/index';

const Article: React.FC<IArticle> = props => {
  return (
    <Styled.Wrapper id={props.id}>
      <h2>{props.title}</h2>
      <Styled.HorizantalSep />
      {props.desc && <p>{props.desc}</p>}
      {props.children}
    </Styled.Wrapper>
  );
};
export default Article;
