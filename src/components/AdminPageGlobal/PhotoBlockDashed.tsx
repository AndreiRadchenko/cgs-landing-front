import React from "react";
import Image from "next/image";
import * as Styled from "../../styles/AdminPage";
import { IPhotoBlock } from "../../types/Admin/Admin.types";

const PhotoBlockDashed = ({ photo, deleteFlag }: IPhotoBlock) => {
  return (
    <Styled.AdminPhotoBlock>
      <Styled.AdminPhotoGrid>
        <Image src={photo} />
      </Styled.AdminPhotoGrid>
      <Styled.AdminDashedPositionGrid>
        <Styled.AdminSubTitle>
          Drop new image here
        </Styled.AdminSubTitle>
        <Styled.AdminComment>Supports: JPG, PNG</Styled.AdminComment>
        {deleteFlag ? (
          <Styled.AdminDeleteText>delete image</Styled.AdminDeleteText>
        ) : null}
      </Styled.AdminDashedPositionGrid>
    </Styled.AdminPhotoBlock>
  );
};

export default PhotoBlockDashed;
