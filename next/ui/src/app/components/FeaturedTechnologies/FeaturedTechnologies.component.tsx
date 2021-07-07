import React from "react";
import * as Styled from "./Featured.styles";
import { v4 as uuidv4 } from "uuid";

const Featured = ({ featuredTech }) => (

      <Styled.FeaturedContainer key={uuidv4()}>
        <Styled.TextContainer>
          <h2>{featuredTech?.name}</h2>
          <p className="featured__description">{featuredTech?.text.split('\n').map((item, idx) => (
            <span key={idx}>
              {item}
              <br />
            </span>
          ))}</p>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <img
            className="featured__img"
            src={featuredTech?.imageUrl}
            alt={featuredTech?.name}
            width="180px"
            height="auto"
          />
          <p className="featured__name">{featuredTech?.label}</p>
        </Styled.ImageContainer>
      </Styled.FeaturedContainer>
);

export default Featured;
