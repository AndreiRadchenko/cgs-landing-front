import React from "react";
import * as Styled from "../../../styles/AdminPage";
import smallMountain from "../../../../public/smallMountain.svg";
import Image from "next/image";
import useUploadModal from "../../../hooks/useUploadModal";
import AdminUploadModal from "../UploadModal";

interface IEmptyProps {
  func?: (image: any) => void;
  header?: string;
}

const AdminEmptyImage = ({ func, header = "Drop image here" }: IEmptyProps) => {
  const { modal, toggleModal } = useUploadModal();

  return (
    <Styled.AdminPhotoBlock theme="center">
      {modal ? <AdminUploadModal func={func} back={toggleModal} /> : null}
      <Styled.AdminDashedPositionGrid>
        <Image src={smallMountain} />
        <Styled.AdminPointer>
          <Styled.AdminSubTitle onClick={toggleModal}>
            {header}
          </Styled.AdminSubTitle>
        </Styled.AdminPointer>
        <Styled.AdminComment>Supports: JPG, PNG</Styled.AdminComment>
      </Styled.AdminDashedPositionGrid>
    </Styled.AdminPhotoBlock>
  );
};

export default AdminEmptyImage;
