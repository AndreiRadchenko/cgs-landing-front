import React from "react";
import * as Styled from "../../../styles/AdminPage";
import montain from "../../../../public/mountain.svg";
import Image from "next/image";
import useUploadModal from "../../../hooks/useUploadModal";
import AdminUploadModal from "../UploadModal";

interface IEmptyProps {
  func?: (image: any) => void;
  header?: string;
  className?: string;
  style?: any;
}

const AdminEmptyImage = ({
  func,
  header = "Drop new image here",
  className,
  style,
}: IEmptyProps) => {
  const { modal, toggleModal } = useUploadModal();

  return (
    <Styled.AdminPhotoBlock className={className} style={style}>
      {modal ? <AdminUploadModal func={func} back={toggleModal} /> : null}
      <Styled.AdminDashedPositionGrid>
        <Image src={montain} alt="empty mountain image" />
        <Styled.AdminPointer>
          <Styled.AdminUploadSubTitle onClick={toggleModal}>
            {header}
          </Styled.AdminUploadSubTitle>
        </Styled.AdminPointer>
      </Styled.AdminDashedPositionGrid>
    </Styled.AdminPhotoBlock>
  );
};

export default AdminEmptyImage;
