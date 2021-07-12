import React from "react";

import * as Styled from "./Facts.styles";

import Hyphenated from 'react-hyphen';

const Facts = ({ fact, number }) => (
  <Styled.Container>
    <Styled.Header>
      <h2>Benefit #{number}</h2>
      <img src={fact.iconUrl} alt="fact_image" width="30" />
    </Styled.Header>
    <Styled.Title>{fact.title}</Styled.Title>
    <Hyphenated>
      <Styled.Text>
        <div dangerouslySetInnerHTML={{ __html: fact.text}} /> 
      </Styled.Text>
    </Hyphenated>   
  </Styled.Container>
);

export default Facts;
