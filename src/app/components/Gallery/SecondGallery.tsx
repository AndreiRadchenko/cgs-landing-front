import React from "react";

import * as Styled from "./GallerySecond.styles";

const SecondGallery = ({ gallery }) => {
  return (
    <>
      <Styled.MainWrapperForDeckstop>
        <Styled.WraperForFirstImage>
          <Styled.Image1>
            <img className="image" src={gallery.imageUrls[0]} />
          </Styled.Image1>
        </Styled.WraperForFirstImage>

        <Styled.WraperForSecondImageAndText>
          <Styled.Block>
            <Styled.Title dangerouslySetInnerHTML={{ __html: gallery?.title }}></Styled.Title>
            <Styled.HorizontalLine></Styled.HorizontalLine>
            <Styled.SubTitle dangerouslySetInnerHTML={{ __html: gallery?.text }}></Styled.SubTitle>
          </Styled.Block>
          <Styled.Image2>
            <img className="image" src={gallery.imageUrls[1]} />
          </Styled.Image2>
        </Styled.WraperForSecondImageAndText>
      </Styled.MainWrapperForDeckstop>

      <Styled.MainWrapperMobile>
        <Styled.Block>
          <Styled.Title dangerouslySetInnerHTML={{ __html: gallery?.title }}></Styled.Title>
          <Styled.HorizontalLine></Styled.HorizontalLine>
          <Styled.SubTitle dangerouslySetInnerHTML={{ __html: gallery?.text }}></Styled.SubTitle>
        </Styled.Block>

        <Styled.WraperForTwoImages>
          <Styled.Image3>
            <img className="image" src={gallery.imageUrls[0]} />
          </Styled.Image3>
          <Styled.Image4>
            <img className="image" src={gallery.imageUrls[1]} />
          </Styled.Image4>
        </Styled.WraperForTwoImages>
      </Styled.MainWrapperMobile>      
    </>
  );
};

export default SecondGallery;
