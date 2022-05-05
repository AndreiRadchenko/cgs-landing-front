import React from "react";
import ReactStars from "react-stars";
import themes from "../../../utils/themes";

interface IStarsProps {
  value: number;
  handleChange?: (number: number) => void;
  size?: number;
  edit?: boolean;
}

const AdminStars = ({
  value,
  handleChange,
  size = 24,
  edit = false,
}: IStarsProps) => {
  const starsChange = (newRating: number) => handleChange!(newRating);
  
  return (
    <ReactStars
      half={true}
      edit={edit}
      onChange={starsChange}
      value={value}
      count={5}
      size={size}
      color2={themes.primary.colors.starActive}
      color1={themes.primary.colors.starDisable}
    />
  );
};

export default AdminStars;
