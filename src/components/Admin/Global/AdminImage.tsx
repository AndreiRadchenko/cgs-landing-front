import Image from "next/image";
import React from "react";
import { IImage } from "../../../types/Admin/Admin.types";
import small from "../../../../public/smallMountain.svg";

const AdminImage = ({ image }: IImage) => {
  return (
    <div>
      {image ? <img src={image!.url} width="100%" /> : <Image src={small} />}
    </div>
  );
};

export default AdminImage;
