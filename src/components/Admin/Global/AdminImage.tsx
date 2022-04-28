import React from "react";
import { IImage } from "../../../types/Admin/Admin.types";

const AdminImage = ({ image }: IImage) => {
  return <img src={image.url} width="100%" />;
};

export default AdminImage;
