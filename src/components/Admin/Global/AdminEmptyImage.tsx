import React from "react";
import * as Styled from "../../../styles/AdminPage";
import smallMountain from "../../../../public/smallMountain.svg";
import Image from "next/image";

const AdminEmptyImage = () => {
  return (
    <Styled.AdminPhotoBlock theme="center">
      <Styled.AdminDashedPositionGrid>
      <Image src={smallMountain} />
      <Styled.AdminSubTitle>Drop image here</Styled.AdminSubTitle>
      <Styled.AdminComment>Supports: JPG, PNG</Styled.AdminComment>
      </Styled.AdminDashedPositionGrid>
    </Styled.AdminPhotoBlock>
  );
};

export default AdminEmptyImage;
