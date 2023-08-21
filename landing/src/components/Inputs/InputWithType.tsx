import React from "react";

import * as Styled from "../../styles/Inputs";

import { IDateInput } from "../../types/Components.types";

const InputWithType = ({
  name,
  value,
  onChange,
  type,
  header,
  style,
}: IDateInput) => {
  return (
    <>
      <Styled.SubTitle>{header}</Styled.SubTitle>
      <Styled.DateInput
        style={style}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default InputWithType;
