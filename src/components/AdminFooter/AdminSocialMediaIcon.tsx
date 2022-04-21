import React from "react";
import * as Styled from "../../styles/AdminPage";
import PhotoBlockDashed from "../AdminPageGlobal/PhotoBlockDashed";

const AdminSocialMediaIcon = ({
  image,
  number,
}: {
  image: any;
  number: number;
}) => {
  return (
    <Styled.AdminSocialIcon>
      <Styled.AdminSubTitle>{number}</Styled.AdminSubTitle>
      <PhotoBlockDashed deleteFlag={true} photo={image} />
    </Styled.AdminSocialIcon>
  );
};

export default AdminSocialMediaIcon;
