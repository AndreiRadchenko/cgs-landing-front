import Image from "next/image";
import React from "react";
import { IImage } from "../../../types/Admin/Admin.types";
import small from "../../../../public/smallMountain.svg";

const AdminImage = ({ image }: IImage) => {
  return (
    <div>
      {image ? (
        <img src={image!.url} width="100%" alt="uploaded img" />
      ) : (
        <Image src={small} alt="small image" />
      )}
    </div>
  );
};

export default AdminImage;
