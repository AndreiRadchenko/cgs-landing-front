import React from "react";
import useUploadModal from "../../../hooks/useUploadModal";
import * as Styled from "../../../styles/AdminPage";
import { IPhotoBlock } from "../../../types/Admin/Admin.types";
import AdminUploadModal from "../UploadModal";
import AdminEmptyImage from "./AdminEmptyImage";
import AdminImage from "./AdminImage";

const PhotoBlockDashed = ({
  photo,
  deleteFlag,
  header = "Drop new image here",
}: IPhotoBlock) => {
  const { modal, toggleModal } = useUploadModal();

  return photo !== null ? (
    <Styled.AdminPhotoBlock>
      {modal ? <AdminUploadModal back={toggleModal} /> : null}
      <Styled.AdminPhotoGrid>
        <AdminImage image={photo} />
      </Styled.AdminPhotoGrid>
      <Styled.AdminDashedPositionGrid>
        <Styled.AdminSubTitle
          style={{ cursor: "pointer" }}
          onClick={toggleModal}
        >
          {header}
        </Styled.AdminSubTitle>
        <Styled.AdminComment>Supports: JPG, PNG</Styled.AdminComment>
        {deleteFlag ? (
          <Styled.AdminDeleteText>delete image</Styled.AdminDeleteText>
        ) : null}
      </Styled.AdminDashedPositionGrid>
    </Styled.AdminPhotoBlock>
  ) : (
    <AdminEmptyImage />
  );
};

export default PhotoBlockDashed;
