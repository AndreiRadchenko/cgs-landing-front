import React from "react";
import * as Styled from "../../styles/Inputs";

interface IDateInput {
  name: string;
  value: string;
  onChange: (e?: string | React.ChangeEvent<any>) => void;
  header: string;
  type: string;
  style?: any;
}

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
