import React from 'react';
import * as Styled from './Facts.styles';
import { v4 as uuidv4 } from 'uuid';

const Facts = ({ fact, number }) => {
  return (
    <Styled.FactContainer className="about-us__slide" key={uuidv4()}>
      <div className="titleWrapper">
        <h2>Fact #{number}</h2>
        <img src={fact.img} alt="" width="30" height="30" />
      </div>
      <p className="fact__title">{fact.title}</p>
      <p className="fact__text">{fact.text}</p>
    </Styled.FactContainer>
  );
};

export default Facts;
