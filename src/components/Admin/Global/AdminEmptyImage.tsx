import React from "react";
import * as Styled from "../../../styles/AdminPage";
import smallMountain from "../../../../public/smallMountain.svg";
import Image from "next/image";
import useUploadModal from "../../../hooks/useUploadModal";
import AdminUploadModal from "../UploadModal";

const AdminEmptyImage = ({func}: {func?: (image: any) => void}) => {
  const { modal, toggleModal } = useUploadModal();

  return (
    <Styled.AdminPhotoBlock theme="center">
      {modal ? <AdminUploadModal func={func} back={toggleModal} /> : null}
      <Styled.AdminDashedPositionGrid>
        <Image src={smallMountain} />
        <Styled.AdminSubTitle
          onClick={toggleModal}
          style={{ cursor: "pointer" }}
        >
          Drop image here
        </Styled.AdminSubTitle>
        <Styled.AdminComment>Supports: JPG, PNG</Styled.AdminComment>
      </Styled.AdminDashedPositionGrid>
    </Styled.AdminPhotoBlock>
  );
};

export default AdminEmptyImage;
