import React from "react";
import useUploadModal from "../../hooks/useUploadModal";
import * as Styled from "../../styles/AdminPage";
import { IPhotoBlock } from "../../types/Admin/Admin.types";
import AdminUploadModal from "../AdminUploadModal";
import AdminEmptyImage from "./AdminEmptyImage";
import AdminImage from "./AdminImage";

const PhotoBlockDashedHorizontal = ({
  photo,
  header = "Drop new image here",
}: IPhotoBlock) => {
  const { modal, toggleModal } = useUploadModal();
  if (photo !== null) {
  return (
    <Styled.AdminPhotoDashedHorizontal>
      {modal ? <AdminUploadModal back={toggleModal} /> : null}
      <Styled.AdminPhotoDashedHorizontalPositoning>
        <AdminImage image={photo} />
        <Styled.AdminCenteredDiv>
          <Styled.AdminSubTitle style={{cursor: "pointer"}} onClick={toggleModal}>{header}</Styled.AdminSubTitle>
          <Styled.AdminComment>Supports: JPG, PNG</Styled.AdminComment>
          <Styled.AdminDeleteText>delete image</Styled.AdminDeleteText>
        </Styled.AdminCenteredDiv>
      </Styled.AdminPhotoDashedHorizontalPositoning>
    </Styled.AdminPhotoDashedHorizontal>
  );
  } else {
    return <AdminEmptyImage />
  }
};

export default PhotoBlockDashedHorizontal;
