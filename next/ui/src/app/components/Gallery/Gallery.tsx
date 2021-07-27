import React from "react";

import * as Styled from "./Gallery.styles";

const Gallery = ({ gallery }) => {
  return (
    <>
      <Styled.Container>
        <Styled.Row>
          <div className="row-item row-item-description">
            <Styled.Title dangerouslySetInnerHTML={{ __html: gallery?.title }}></Styled.Title>
            <Styled.HorizontalLine></Styled.HorizontalLine>
            <Styled.SubTitle dangerouslySetInnerHTML={{ __html: gallery?.text }}></Styled.SubTitle>           
          </div>
          <div className="row-item row-item-high desktop-hidden row-item-30">
            {<img src={gallery.imageUrls[3]} />}
          </div>
          <div className="row-item row-item-high row-item-70">
            {<img src={gallery.imageUrls[0]} />}
          </div>
        </Styled.Row>

        <Styled.RowLast>
          <div className="row-item row-item-low row-item-30">
            {<img className="no-stratch-image" src={gallery.imageUrls[1]} />}
          </div>
          <div className="row-item row-item-low row-item-70">
            {<img src={gallery.imageUrls[2]} />}
          </div>
        </Styled.RowLast>
      </Styled.Container>  
    </>
  );
};

export default Gallery;
