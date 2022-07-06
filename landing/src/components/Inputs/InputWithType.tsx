import React from "react";
import * as Styled from "../../styles/Inputs";

interface IDateInput {
  name: string;
  value: string;
  onChange: (e?: string | React.ChangeEvent<any>) => void;
  header: string;
  type: string;
}

const InputWithType = ({ name, value, onChange, type, header }: IDateInput) => {
  return (
    <>
      <Styled.SubTitle>{header}</Styled.SubTitle>
      <Styled.DateInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default InputWithType;
