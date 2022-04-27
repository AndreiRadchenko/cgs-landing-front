import React from "react";
import ReactStars from "react-stars";
import themes from "../../utils/themes";

const AdminStars = ({
  value,
  handleChange,
  size = 24,
  edit = false,
}: {
  value: number;
  handleChange?: any;
  size?: number;
  edit?: boolean;
}) => {
  return (
    <ReactStars
      half={true}
      edit={edit}
      onChange={(newRating) => handleChange(newRating)}
      value={value}
      count={5}
      size={size}
      color2={themes.primary.colors.starActive}
      color1={themes.primary.colors.starDisable}
    />
  );
};

export default AdminStars;
