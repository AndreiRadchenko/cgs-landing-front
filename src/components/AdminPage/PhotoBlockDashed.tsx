import React from "react";
import Image from "next/image";
import * as Styled from "../../styles/AdminPage";

const PhotoBlockDashed = ({ photo }: any) => {
  return (
    <Styled.AdminMainPagePhotoBlock>
      <Styled.AdminMainPhotoGrid>
        <Image src={photo} />
      </Styled.AdminMainPhotoGrid>
      <Styled.AdminMainBlockSubTitle>
        Drop new image here
      </Styled.AdminMainBlockSubTitle>
      <Styled.AdminMainBlockComment>
        Supports: JPG, PNG
      </Styled.AdminMainBlockComment>
      <Styled.AdminMainDeleteText>delete image</Styled.AdminMainDeleteText>
    </Styled.AdminMainPagePhotoBlock>
  );
};

export default PhotoBlockDashed;
