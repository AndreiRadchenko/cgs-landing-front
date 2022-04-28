import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IImage } from "../../../types/Admin/Admin.types";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";

interface ISocialProps {
  image: IImage;
  number: number;
}

const AdminSocialMediaIcon = ({ image, number }: ISocialProps) => {
  return (
    <Styled.AdminSocialIcon>
      <Styled.AdminSubTitle>{number}</Styled.AdminSubTitle>
      <PhotoBlockDashed deleteFlag={true} photo={image} />
    </Styled.AdminSocialIcon>
  );
};

export default AdminSocialMediaIcon;
