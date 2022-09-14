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
  deleteFunction,
  uploadFunction,
  maxWidth,
  maxHeight,
  className,
}: IPhotoBlock) => {
  const { modal, toggleModal } = useUploadModal();
  const deleteFunc = () => deleteFunction!();

  return photo !== null && photo !== undefined ? (
    <Styled.AdminPhotoBlock
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      className={className}
    >
      {modal ? (
        <AdminUploadModal func={uploadFunction} back={toggleModal} />
      ) : null}
      <Styled.AdminPhotoGrid className={className}>
        <AdminImage image={photo} />
      </Styled.AdminPhotoGrid>
      <Styled.AdminDashedPositionGrid>
        <Styled.AdminPointer>
          <Styled.AdminSubTitle onClick={toggleModal}>
            {header}
          </Styled.AdminSubTitle>
        </Styled.AdminPointer>
        <Styled.AdminComment>Supports: JPG, PNG, SVG</Styled.AdminComment>
        {deleteFlag ? (
          <Styled.AdminDeleteText onClick={deleteFunc}>
            delete image
          </Styled.AdminDeleteText>
        ) : null}
      </Styled.AdminDashedPositionGrid>
    </Styled.AdminPhotoBlock>
  ) : (
    <AdminEmptyImage
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      className={className}
      func={uploadFunction}
    />
  );
};

export default PhotoBlockDashed;
