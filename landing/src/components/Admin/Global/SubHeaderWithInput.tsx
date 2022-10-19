import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { InputWithHeader } from "../../../types/Admin/Admin.types";

const SubHeaderWithInput = ({
  header,
  inputValue,
  onChangeFunction,
  onInputFunction,
  name,
  placeholder,
  minRows,
  isBlog = false,
  isAdmin = false,
  height,
  width,
  id,
  inputStyle,
  isMetaField = false,
}: InputWithHeader) => {
  return (
    <div>
      <Styled.AdminSubTitle isBlog={isBlog}>{header}</Styled.AdminSubTitle>
      <Styled.AdminInput
        className={isMetaField ? "metaField" : undefined}
        isAdmin={isAdmin}
        onInput={onInputFunction}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeFunction}
        name={name}
        minRows={minRows}
        height={height}
        width={width}
        id={id}
        style={inputStyle}
      />
    </div>
  );
};

export default SubHeaderWithInput;
