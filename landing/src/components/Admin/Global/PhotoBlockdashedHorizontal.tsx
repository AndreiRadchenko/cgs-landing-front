import React from "react";
import useUploadModal from "../../../hooks/useUploadModal";
import * as Styled from "../../../styles/AdminPage";
import { IPhotoBlock } from "../../../types/Admin/Admin.types";
import AdminUploadModal from "../UploadModal";
import AdminEmptyImage from "./AdminEmptyImage";
import AdminImage from "./AdminImage";

const PhotoBlockDashedHorizontal = ({
  photo,
  header = "Drop new image here",
  emptyHeader,
  deleteFunction,
  uploadFunction,
}: IPhotoBlock) => {
  const { modal, toggleModal } = useUploadModal();
  const deleteFunc = () => deleteFunction!();

  return photo !== null && photo !== undefined ? (
    <Styled.AdminPhotoBlock>
      {modal ? (
        <AdminUploadModal back={toggleModal} func={uploadFunction} />
      ) : null}
      <Styled.AdminDashedPositionGrid>
        <AdminImage image={photo} />
        <Styled.AdminPointer>
          <Styled.AdminUploadSubTitle onClick={toggleModal}>
            {header}
          </Styled.AdminUploadSubTitle>
          <Styled.AdminDeleteText onClick={deleteFunc}>
            delete image
          </Styled.AdminDeleteText>
        </Styled.AdminPointer>
      </Styled.AdminDashedPositionGrid>
    </Styled.AdminPhotoBlock>
  ) : (
    <AdminEmptyImage func={uploadFunction} header={emptyHeader} />
  );
};

export default PhotoBlockDashedHorizontal;
