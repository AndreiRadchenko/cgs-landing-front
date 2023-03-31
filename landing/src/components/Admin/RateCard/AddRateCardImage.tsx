import React from "react";
import Image from "next/image";

import AdminUploadModal from "../UploadModal";

import * as Styled from "../../../styles/AdminPage";
import { DeleteImage } from "../../../styles/AdminRateCard.styled";

import montain from "../../../../public/mountain.svg";
import useUploadModal from "../../../hooks/useUploadModal";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import { IImage } from "../../../types/Admin/Admin.types";

const AddRateCardImage = () => {
  const deleteImageFunction = useDeleteImageFunction();
  const uploadImageFunction = useUploadImageFunction();

  const deleteFunc = async () => (await deleteImageFunction)();
  const uploadFunc = (image: IImage) => uploadImageFunction(image);

  const { modal, toggleModal } = useUploadModal();

  return (
    <Styled.AdminPointer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Styled.AdminPhotoBlock className={"author"}>
          {modal ? (
            <AdminUploadModal func={uploadFunc} back={toggleModal} />
          ) : null}
          <Styled.AdminDashedPositionGrid>
            <Image
              width={41}
              height={33}
              src={montain}
              alt="empty mountain image"
            />
          </Styled.AdminDashedPositionGrid>
        </Styled.AdminPhotoBlock>
        <Styled.AuthorPhotoTextWrapper>
          <Styled.AdminPointer>
            <Styled.AdminSubTitle className="author" onClick={toggleModal}>
              Add an illustration (icon)
            </Styled.AdminSubTitle>
            <DeleteImage onClick={deleteFunc}>delete image</DeleteImage>
          </Styled.AdminPointer>
        </Styled.AuthorPhotoTextWrapper>
      </div>
    </Styled.AdminPointer>
  );
};

export default AddRateCardImage;
