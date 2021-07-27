import React from "react";
import Hyphenated from 'react-hyphen';
import { Parser as HtmlToReactParser } from "html-to-react";

import * as Styled from "./Facts.styles";

const Facts = ({ fact, number }) => {
  const parser = new HtmlToReactParser();

  return (
    <Styled.Container>
      <Styled.Header>
        <h2>Benefit #{number}</h2>
        <img src={fact.iconUrl} alt="fact_image" width="30" loading="lazy" />
      </Styled.Header>
      <Styled.Title>{fact.title}</Styled.Title>
      <Styled.Text>
        <Hyphenated>
          {parser.parse(fact.text)}
        </Hyphenated>
      </Styled.Text>
    </Styled.Container>
  );
};

export default Facts;
