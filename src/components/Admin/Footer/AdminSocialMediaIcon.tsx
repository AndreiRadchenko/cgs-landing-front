import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IImage } from "../../../types/Admin/Admin.types";
import { IPropsWithImage } from "../../../types/Admin/BlockProps";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";

interface ISocialProps extends IPropsWithImage {
  image: IImage;
  number: number;
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
