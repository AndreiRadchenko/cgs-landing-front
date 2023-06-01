import React, { FC } from "react";
import * as Styled from "./FormField2.styled";

interface IFieldProps {
  name: string;
  label: string;
  type?: string;
  toFormError: boolean;
}

const TextFieldWrapper: FC<IFieldProps> = ({
  name,
  label,
  type = "text",
  toFormError
}: IFieldProps) => {
  return (
    <>
      <Styled.FormFieldContainer>
        <Styled.FormField placeholder={label} type={type} name={name} toError={toFormError}/>
      </Styled.FormFieldContainer>
    </>
  );
};

export default TextFieldWrapper;
