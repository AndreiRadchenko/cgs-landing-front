import React from "react";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

const LeftSideBlock = ({ title, handleChange }) => {
  return (
    <SubHeaderWithInput
      header="Text"
      name={title}
      inputValue={title}
      onChangeFunction={handleChange}
    />
  );
};

export default LeftSideBlock;
