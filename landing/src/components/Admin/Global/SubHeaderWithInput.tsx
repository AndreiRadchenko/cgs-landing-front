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
  isadminblog,
  height,
  width,
  id,
  inputStyle,
  titleStyle,
  isMetaField = false,
  iserror = false,
  maxLength,
}: InputWithHeader) => {
  return (
    <div>
      <Styled.AdminSubTitle
        style={titleStyle}
        isadminblog={isadminblog}
        isBlog={isBlog}
      >
        {header}
      </Styled.AdminSubTitle>
      <Styled.AdminInput
        iserror={iserror}
        className={isMetaField ? "metaField" : undefined}
        onInput={onInputFunction}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeFunction}
        name={name}
        maxLength={maxLength}
        minRows={minRows}
        height={height}
        width={width}
        id={id}
        style={inputStyle}
        isadminblog={isadminblog}
      />
    </div>
  );
};

export default SubHeaderWithInput;
