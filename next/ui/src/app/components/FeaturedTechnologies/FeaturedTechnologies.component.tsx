import React from 'react';
import * as Styled from './Featured.styles';
import { v4 as uuidv4 } from 'uuid';

const Featured = ({ tech }) => {
  return (
    <Styled.FeaturedContainer key={uuidv4()}>
      <Styled.TextContainer>
        <h2>{tech.title}</h2>
        <p className="featured__description">{tech.description}</p>
      </Styled.TextContainer>
      <Styled.ImageContainer className="featured__image">
        <img className="featured__img" src={tech?.img} alt="" />
        <p className="featured__name">{tech.name}</p>
      </Styled.ImageContainer>
    </Styled.FeaturedContainer>
  );
};

export default Featured;
