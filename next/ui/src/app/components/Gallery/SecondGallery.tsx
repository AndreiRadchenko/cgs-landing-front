import React from "react";

import * as Styled from "./GallerySecond.styles";

const SecondGallery = ({ gallery }) => {
  return (
    <Styled.Container>
      <Styled.WraperForFirstImage>
        <Styled.Image1>
          <img className="image" src={gallery.imageUrls[0]} loading="lazy" />
        </Styled.Image1>
      </Styled.WraperForFirstImage>

      <Styled.WraperForSecondImageAndText>
        <Styled.Block>
          <Styled.Title dangerouslySetInnerHTML={{ __html: gallery?.title }}></Styled.Title>
          <Styled.HorizontalLine></Styled.HorizontalLine>
          <Styled.SubTitle dangerouslySetInnerHTML={{ __html: gallery?.text }}></Styled.SubTitle>
        </Styled.Block>
        <Styled.Image2>
          <img className="image" src={gallery.imageUrls[1]} loading="lazy" />
        </Styled.Image2>
      </Styled.WraperForSecondImageAndText>
    </Styled.Container>
  );
};

export default SecondGallery;
