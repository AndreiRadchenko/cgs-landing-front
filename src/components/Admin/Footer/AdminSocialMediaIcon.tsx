import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IImage } from "../../../types/Admin/Admin.types";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";

interface ISocialProps {
  image: IImage;
  number: number;
  uploadFunction: (image: any) => void;
  deleteFunction: () => void;
}

const AdminSocialMediaIcon = ({
  image,
  number,
  uploadFunction,
  deleteFunction,
}: ISocialProps) => {
  return (
    <Styled.AdminSocialIcon>
      <Styled.AdminSubTitle>{number}</Styled.AdminSubTitle>
      <PhotoBlockDashed
        deleteFlag={true}
        photo={image.image}
        uploadFunction={(image) => uploadFunction(image)}
        deleteFunction={deleteFunction}
      />
    </Styled.AdminSocialIcon>
  );
};

export default AdminSocialMediaIcon;
