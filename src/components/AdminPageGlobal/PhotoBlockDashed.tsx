import React from "react";
import Image from "next/image";
import * as Styled from "../../styles/AdminPage";
import { IPhotoBlock } from "../../types/Admin/Admin.types";

const PhotoBlockDashed = ({ photo, deleteFlag }: IPhotoBlock) => {
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
      {deleteFlag ? <Styled.AdminMainDeleteText>delete image</Styled.AdminMainDeleteText> : null}
    </Styled.AdminMainPagePhotoBlock>
  );
};

export default PhotoBlockDashed;
