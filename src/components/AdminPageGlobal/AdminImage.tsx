import Image from "next/image";
import React from "react";

const AdminImage = ({image}: {image: any}) => {
  return <Image src={image} />
}

export default AdminImage;