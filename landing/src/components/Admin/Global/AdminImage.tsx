import Image from "next/image";
import React from "react";
import { IImage } from "../../../types/Admin/Admin.types";
import small from "../../../../public/smallMountain.svg";

const AdminImage = ({ image }: IImage) => {
  return (
    <>
      {image ? (
        <Image
          src={image!.url}
          layout="fill"
          objectFit="contain"
          width="100%"
          alt="uploaded img"
        />
      ) : (
        <Image src={small} alt="small image" />
      )}
    </>
  );
};

export default AdminImage;
