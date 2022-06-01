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
  horizontalFlex,
  maxWidth,
}: IPhotoBlock) => {
  const { modal, toggleModal } = useUploadModal();
  const deleteFunc = () => deleteFunction!();

  return photo !== null && photo !== undefined ? (
    <Styled.AdminPhotoDashedHorizontal maxWidth={maxWidth}>
      {modal ? (
        <AdminUploadModal back={toggleModal} func={uploadFunction} />
      ) : null}
      <Styled.AdminPhotoDashedHorizontalPositoning
        horizontalFlex={horizontalFlex}
      >
        <AdminImage image={photo} />
        <Styled.AdminCenteredDiv>
          <Styled.AdminPointer>
            <Styled.AdminSubTitle onClick={toggleModal}>
              {header}
            </Styled.AdminSubTitle>
          </Styled.AdminPointer>
          <Styled.AdminComment>Supports: JPG, PNG</Styled.AdminComment>
          <Styled.AdminDeleteText onClick={deleteFunc}>
            delete image
          </Styled.AdminDeleteText>
        </Styled.AdminCenteredDiv>
      </Styled.AdminPhotoDashedHorizontalPositoning>
    </Styled.AdminPhotoDashedHorizontal>
  ) : (
    <AdminEmptyImage func={uploadFunction} header={emptyHeader} />
  );
};

export default PhotoBlockDashedHorizontal;
