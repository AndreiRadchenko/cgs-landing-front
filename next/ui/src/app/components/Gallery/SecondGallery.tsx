import React from "react";
import Image from "next/image";
import * as Styled from "./GallerySecond.styles";

const SecondGallery = ({ gallery }) => {
  return (
    <Styled.Container>
      <Styled.WraperForFirstImage>
        <Styled.Image1>
        <Image
          className="image"
          src={gallery.imageUrls[0]}
          width="806"
          height="1027"
          />
        </Styled.Image1>
      </Styled.WraperForFirstImage>

      <Styled.WraperForSecondImageAndText>
        <Styled.Block>
          <Styled.Title dangerouslySetInnerHTML={{ __html: gallery?.title }}></Styled.Title>
          <Styled.HorizontalLine></Styled.HorizontalLine>
          <Styled.SubTitle dangerouslySetInnerHTML={{ __html: gallery?.text }}></Styled.SubTitle>
        </Styled.Block>
        <Styled.Image2>
        <Image
          className="image"
          src={gallery.imageUrls[1]}
          width="1239"
          height="762"
          />
        </Styled.Image2>
      </Styled.WraperForSecondImageAndText>
    </Styled.Container>
  );
};

export default SecondGallery;
