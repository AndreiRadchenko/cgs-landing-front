import React from "react";
import * as Styled from "../../../styles/AdminPage";
import smallMountain from "../../../../public/smallMountain.svg";
import Image from "next/image";
import useUploadModal from "../../../hooks/useUploadModal";
import AdminUploadModal from "../UploadModal";

interface IEmptyProps {
  func?: (image: any) => void;
  header?: string;
  className?: string;
  maxWidth?: string;
  maxHeight?: string;
}

const AdminEmptyImage = ({
  func,
  header = "Drop image here",
  className,
  maxWidth,
  maxHeight,
}: IEmptyProps) => {
  const { modal, toggleModal } = useUploadModal();

  return (
    <Styled.AdminPhotoBlock
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      theme="center"
      className={className}
    >
      {modal ? <AdminUploadModal func={func} back={toggleModal} /> : null}
      <Styled.AdminDashedPositionGrid>
        <Image src={smallMountain} alt="small mountain image" />
        <Styled.AdminPointer>
          <Styled.AdminSubTitle onClick={toggleModal}>
            {header}
          </Styled.AdminSubTitle>
        </Styled.AdminPointer>
        <Styled.AdminComment>Supports: JPG, PNG, SVG</Styled.AdminComment>
      </Styled.AdminDashedPositionGrid>
    </Styled.AdminPhotoBlock>
  );
};

export default AdminEmptyImage;
