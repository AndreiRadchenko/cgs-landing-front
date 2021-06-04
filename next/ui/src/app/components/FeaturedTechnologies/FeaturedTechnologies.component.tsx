import React from "react";
import * as Styled from "./Featured.styles";
import { v4 as uuidv4 } from "uuid";

const Featured = ({ featuredTech }) => (
  <Styled.FeaturedContainer key={uuidv4()}>
    <Styled.TextContainer>
      <h2>{featuredTech.name}</h2>
      <p className="featured__description">{featuredTech.text}</p>
    </Styled.TextContainer>
    <Styled.ImageContainer>
      <img
        className="featured__img"
        src={featuredTech.imageUrl}
        alt={featuredTech.name}
        width="100%"
      />
      <p className="featured__name">{featuredTech.name}</p>
    </Styled.ImageContainer>
  </Styled.FeaturedContainer>
);

export default Featured;
