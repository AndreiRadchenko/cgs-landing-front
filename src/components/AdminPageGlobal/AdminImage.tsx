import React from "react";

const AdminImage = ({ image }: { image: any }) => {
  return <img src={image.url} width="100%" />;
};

export default AdminImage;
