import React from "react";
import { IImage } from "../../../types/Admin/Admin.types";

const AdminImage = ({ image }: IImage) => {
  return <div><img src={image!.url} width="100%" /></div>;
};

export default AdminImage;
