import React from "react";
import Image from "next/image";

import useUploadModal from "../../../../hooks/useUploadModal";
import AdminUploadModal from "../../UploadModal";

import mountain from "../../../../../public/mountain.svg";
import * as Styled from "../../../../styles/AdminPage";

interface IEmptyProps {
  func?: (image: any) => void;
  header?: string;
  style?: any;
  wrapperStyle?: any;
}

const AdminEmptyImage = ({
  func,
  header = "add photo of the author",
  style,
  wrapperStyle,
}: IEmptyProps) => {
  const { modal, toggleModal } = useUploadModal();

  return (
    <Styled.AdminPhotoGrid className="author" style={wrapperStyle}>
      <Styled.AdminPhotoBlock style={style} className="author">
        {modal ? <AdminUploadModal func={func} back={toggleModal} /> : null}
        <Image
          src={mountain}
          alt="empty mountain image"
          width={41}
          height={33}
        />
      </Styled.AdminPhotoBlock>
      <Styled.AuthorPhotoTextWrapper>
        <Styled.AdminPointer>
          <Styled.AdminSubTitle className="author" onClick={toggleModal}>
            {header}
          </Styled.AdminSubTitle>
        </Styled.AdminPointer>
        <Styled.AdminComment>Supports: JPG, PNG, SVG</Styled.AdminComment>
      </Styled.AuthorPhotoTextWrapper>
    </Styled.AdminPhotoGrid>
  );
};

export default AdminEmptyImage;
