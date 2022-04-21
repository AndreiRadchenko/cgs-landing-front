import React from "react";
import * as Styled from "../../styles/AdminPage";
import { IPhotoBlock } from "../../types/Admin/Admin.types";
import AdminImage from "./AdminImage";

const PhotoBlockDashed = ({
  photo,
  deleteFlag,
  header = "Drop new image here",
}: IPhotoBlock) => {
  return (
    <Styled.AdminPhotoBlock>
      <Styled.AdminPhotoGrid>
        <AdminImage image={photo} />
      </Styled.AdminPhotoGrid>
      <Styled.AdminDashedPositionGrid>
        <Styled.AdminSubTitle>{header}</Styled.AdminSubTitle>
        <Styled.AdminComment>Supports: JPG, PNG</Styled.AdminComment>
        {deleteFlag ? (
          <Styled.AdminDeleteText>delete image</Styled.AdminDeleteText>
        ) : null}
      </Styled.AdminDashedPositionGrid>
    </Styled.AdminPhotoBlock>
  );
};

export default PhotoBlockDashed;
