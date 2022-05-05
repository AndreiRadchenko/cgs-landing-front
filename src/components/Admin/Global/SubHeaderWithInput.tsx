import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { InputWithHeader } from "../../../types/Admin/Admin.types";

const SubHeaderWithInput = ({
  header,
  inputValue,
  onChangeFunction,
  name,
  placeholder,
}: InputWithHeader) => {
  return (
    <>
      <Styled.AdminSubTitle>{header}</Styled.AdminSubTitle>
      <Styled.AdminInput
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeFunction}
        name={name}
      />
    </>
  );
};

export default SubHeaderWithInput;
