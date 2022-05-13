import React from "react";
import Image from "next/image";

import * as Styled from "./Gallery.styles";

const Gallery = ({ gallery }) => {
  return (
    <Styled.Container>
      <Styled.Row>
        <div className="row-item row-item-description">
          <Styled.Title dangerouslySetInnerHTML={{ __html: gallery?.title }}></Styled.Title>
          <Styled.HorizontalLine></Styled.HorizontalLine>
          <Styled.SubTitle dangerouslySetInnerHTML={{ __html: gallery?.text }}></Styled.SubTitle>
        </div>
        <div className="row-item row-item-high desktop-hidden row-item-30">
          <Image
              src={gallery.imageUrls[3]}
              width="252"
              height="330"
            />
        </div>
        <div className="row-item row-item-high row-item-70">
          <Image
                src={gallery.imageUrls[0]}
                width="781%"
                height="621%"
                loading="lazy"
              />
        </div>
      </Styled.Row>

      <Styled.RowLast>
        <div className="row-item row-item-low row-item-30">
          <Image
                src={gallery.imageUrls[1]}
                width="252"
                height="330"
                className="no-stratch-image"
              />
        </div>
        <div className="row-item row-item-low row-item-70">
          <Image
                src={gallery.imageUrls[2]}
                width="781"
                height="621"
              />
        </div>
      </Styled.RowLast>
    </Styled.Container>
  );
};

export default Gallery;
