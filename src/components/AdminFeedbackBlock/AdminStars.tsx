import React from "react";
import ReactStars from "react-stars";
import themes from "../../utils/themes";

const AdminStars = ({ value, size = 24 }: { value: number; size?: number }) => {
  return (
    <ReactStars
      half={true}
      edit={false}
      value={value}
      count={5}
      size={size}
      color2={themes.primary.colors.starActive}
      color1={themes.primary.colors.starDisable}
    />
  );
};

export default AdminStars;
