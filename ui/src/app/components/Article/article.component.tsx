import React from 'react';
import * as Styled from './article.styles';

const Article = props => {
  return (
    <Styled.Wrapper data-scroll={props.title}>
      <a className="anchor" id={props.id} />
      <h2>{props.title}</h2>
      <Styled.HorizantalSep />
      {props.desc && <p>{props.desc}</p>}
      {props.children}
    </Styled.Wrapper>
  );
};
export default Article;
