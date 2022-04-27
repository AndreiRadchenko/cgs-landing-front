import React from "react";
import * as Styled from "../../styles/AdminPage";
import PhotoBlockDashed from "../AdminPageGlobal/PhotoBlockDashed";

interface ISocialProps {
  image: any;
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
