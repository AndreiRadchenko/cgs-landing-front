import React from "react";

import * as Styled from "./Facts.styles";

import { addLineBreaks } from "helpers/addLineBreaks";

const Facts = ({ fact, number }) => (
  <Styled.Container>
    <Styled.Header>
      <h2>Benefit #{number}</h2>
      <img src={fact.iconUrl} alt="fact_image" width="30" />
    </Styled.Header>
    <Styled.Title>{fact.title}</Styled.Title>
    <Styled.Text>{fact?.text && addLineBreaks(fact.text)}</Styled.Text>
  </Styled.Container>
);

export default Facts;
