import Hyphenated from "react-hyphen";
import Image from "next/image";

import * as Styled from "./Featured.styles";

const Featured = ({ featuredTech }) => (
  <Styled.FeaturedContainer>
    <Styled.TextContainer>
      <h2>{featuredTech?.name}</h2>
      <Hyphenated>
        <p className="featured__description">{featuredTech?.text}</p>
      </Hyphenated>
    </Styled.TextContainer>
    <Styled.ImageContainer>
      <Image
        className="featured__img"
        src={featuredTech?.imageUrl}
        alt={featuredTech?.name}
        width="180"
        height="180"
        loading="lazy"
      />
      <p className="featured__name">{featuredTech?.label}</p>
    </Styled.ImageContainer>
  </Styled.FeaturedContainer>
);

export default Featured;
