import React from "react";
import * as Styled from "../../styles/AdminPage";
import { InputWithHeader } from "../../types/Admin/Admin.types";

const SubHeaderWithInput = ({header, inputValue, onChangeFunction, limit = 60}: InputWithHeader) => {
  return (
    <>
      <Styled.AdminSubTitle>
        {header}
      </Styled.AdminSubTitle>
      <Styled.AdminInput value={inputValue} onChange={onChangeFunction} rows={Math.ceil(inputValue.length / limit)} />
    </>
  )
}

export default SubHeaderWithInput;