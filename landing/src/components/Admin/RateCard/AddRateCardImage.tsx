import React from "react";
import Image from "next/image";

import AdminUploadModal from "../UploadModal";

import * as Styled from "../../../styles/AdminPage";

import montain from "../../../../public/mountain.svg";
import useUploadModal from "../../../hooks/useUploadModal";

interface IEmptyProps {
  func?: (image: any) => void;
  header?: string;
  className?: string;
  style?: any;
}

const AddRateCardImage = ({ func }: IEmptyProps) => {
  const { modal, toggleModal } = useUploadModal();

  return (
    <Styled.AdminPointer>
      <Styled.AdminPhotoBlock onClick={toggleModal} className={"author"}>
        {modal ? <AdminUploadModal func={func} back={toggleModal} /> : null}
        <Styled.AdminDashedPositionGrid>
          <Image
            width={41}
            height={33}
            src={montain}
            alt="empty mountain image"
          />
        </Styled.AdminDashedPositionGrid>
      </Styled.AdminPhotoBlock>
    </Styled.AdminPointer>
  );
};

export default AddRateCardImage;
