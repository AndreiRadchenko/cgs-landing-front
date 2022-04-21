import React from "react";
import * as Styled from "../../styles/AdminPage";
import { IPhotoBlock } from "../../types/Admin/Admin.types";
import AdminImage from "./AdminImage";

const PhotoBlockDashedHorizontal = ({
  photo,
  header = "Drop new image here",
}: IPhotoBlock) => {
  return (
    <Styled.AdminPhotoDashedHorizontal>
      <Styled.AdminPhotoDashedHorizontalPositoning>
        <AdminImage image={photo} />
        <Styled.AdminCenteredDiv>
          <Styled.AdminSubTitle>{header}</Styled.AdminSubTitle>
          <Styled.AdminComment>Supports: JPG, PNG</Styled.AdminComment>
          <Styled.AdminDeleteText>delete image</Styled.AdminDeleteText>
        </Styled.AdminCenteredDiv>
      </Styled.AdminPhotoDashedHorizontalPositoning>
    </Styled.AdminPhotoDashedHorizontal>
  );
};

export default PhotoBlockDashedHorizontal;
