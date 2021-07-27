import React from "react";
import * as Styled from "./Featured.styles";
import { v4 as uuidv4 } from "uuid";
import Hyphenated from "react-hyphen";

const Featured = ({ featuredTech }) => (
  <Styled.FeaturedContainer key={uuidv4()}>
    <Styled.TextContainer>
      <h2>{featuredTech?.name}</h2>
      <Hyphenated>
        <p className="featured__description">{featuredTech?.text}</p>
      </Hyphenated>
    </Styled.TextContainer>
    <Styled.ImageContainer>
      <img
        className="featured__img"
        src={featuredTech?.imageUrl}
        alt={featuredTech?.name}
        width="180px"
        height="auto"
        loading="lazy"
      />
      <p className="featured__name">{featuredTech?.label}</p>
    </Styled.ImageContainer>
  </Styled.FeaturedContainer>
);

export default Featured;
