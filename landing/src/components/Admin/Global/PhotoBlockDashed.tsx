import React from "react";

import AdminUploadModal from "../UploadModal";
import AdminEmptyImage from "./AdminEmptyImage";
import AdminImage from "./AdminImage";
import PhotoBlockStub from "./PhotoBlockStub";

import useUploadModal from "../../../hooks/useUploadModal";
import * as Styled from "../../../styles/AdminPage";
import { IPhotoBlock } from "../../../types/Admin/Admin.types";

const PhotoBlockDashed = ({
  photo,
  deleteFlag,
  header = "Drop new image here",
  deleteFunction,
  uploadFunction,
  className,
  imageStyle,
  style,
  unchangeable,
}: IPhotoBlock) => {
  const { modal, toggleModal } = useUploadModal();
  const deleteFunc = () => deleteFunction!();

  return unchangeable ? (
    <PhotoBlockStub />
  ) : photo !== null && photo !== undefined ? (
    <Styled.AdminPhotoBlock className={className} style={style}>
      {modal ? (
        <AdminUploadModal func={uploadFunction} back={toggleModal} />
      ) : null}
      <Styled.AdminPhotoGrid className="fullWidth">
        <Styled.AdminImageWrapper style={imageStyle}>
          <AdminImage image={photo} />
        </Styled.AdminImageWrapper>
      </Styled.AdminPhotoGrid>
      <Styled.AdminDashedPositionGrid>
        <Styled.AdminPointer>
          <Styled.AdminSubTitle onClick={toggleModal} size="1.165em">
            {header}
          </Styled.AdminSubTitle>
        </Styled.AdminPointer>
        {deleteFlag ? (
          <Styled.AdminDeleteText onClick={deleteFunc}>
            delete image
          </Styled.AdminDeleteText>
        ) : null}
      </Styled.AdminDashedPositionGrid>
    </Styled.AdminPhotoBlock>
  ) : (
    <AdminEmptyImage
      className={className}
      func={uploadFunction}
      style={style}
      header={header}
    />
  );
};

export default PhotoBlockDashed;
