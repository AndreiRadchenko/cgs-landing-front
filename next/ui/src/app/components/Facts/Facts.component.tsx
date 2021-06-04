import React from "react";
import * as Styled from "./Facts.styles";
import { v4 as uuidv4 } from "uuid";

const Facts = ({ fact, number }) => (
  <Styled.FactContainer className="about-us__slide" key={uuidv4()}>
    <div className="titleWrapper">
      <h2>Fact #{number}</h2>
      <img src={fact.iconUrl} alt="fact_image" width="30" />
    </div>
    <Styled.FactTitle className="fact__title">{fact.title}</Styled.FactTitle>
    <p className="fact__text">{fact.text}</p>
  </Styled.FactContainer>
);

export default Facts;
