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
  const uploadFunc = (image: any) => uploadFunction(image);

  return (
    <Styled.AdminSocialIcon>
      <Styled.AdminSubTitle>{number}</Styled.AdminSubTitle>
      <PhotoBlockDashed
        style={{ minHeight: "168px", maxWidth: "194px" }}
        deleteFlag={true}
        photo={image.image}
        uploadFunction={uploadFunc}
        deleteFunction={deleteFunction}
      />
    </Styled.AdminSocialIcon>
  );
};

export default AdminSocialMediaIcon;
