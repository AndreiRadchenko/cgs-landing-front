import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { InputWithHeader } from "../../../types/Admin/Admin.types";

const SubHeaderWithInput = ({
  header,
  inputValue,
  onChangeFunction,
  name,
  placeholder,
  minRows,
  isBlog = false,
  height,
  width,
  id,
}: InputWithHeader) => {
  return (
    <>
      <Styled.AdminSubTitle isBlog={isBlog}>{header}</Styled.AdminSubTitle>
      <Styled.AdminInput
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeFunction}
        name={name}
        minRows={minRows}
        height={height}
        width={width}
        id={id}
      />
    </>
  );
};

export default SubHeaderWithInput;
