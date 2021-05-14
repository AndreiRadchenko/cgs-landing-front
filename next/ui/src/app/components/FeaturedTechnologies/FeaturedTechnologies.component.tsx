import React from 'react';
import * as Styled from './Featured.styles';
import { v4 as uuidv4 } from 'uuid';

const Featured = ({ tech, FeaturedTech }) => {
  return (
    <Styled.FeaturedContainer key={uuidv4()}>
      <Styled.TextContainer>
        <h2>{tech.title || FeaturedTech.title}</h2>
        <p className="featured__description">{tech.description}</p>
      </Styled.TextContainer>
      <Styled.ImageContainer className="featured__image">
        <img
          className="featured__img"
          src={tech.img || FeaturedTech.img}
          alt={tech.title || FeaturedTech.title}
        />
        <p className="featured__name">{tech.name || FeaturedTech.name}</p>
      </Styled.ImageContainer>
    </Styled.FeaturedContainer>
  );
};

export default Featured;
