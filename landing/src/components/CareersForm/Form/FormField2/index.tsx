import React, { FC } from "react";
import * as Styled from "./FormField2.styled";

interface IFieldProps {
  name: string;
  label: string;
  type?: string;
  toFormError: boolean;
  toFormErrorEmail: boolean;
  className: string;
}

const TextFieldWrapper: FC<IFieldProps> = ({
  name,
  label,
  type = "text",
  toFormError,
  toFormErrorEmail,
  className,
}: IFieldProps) => {
  return (
    <>
      <Styled.FormFieldContainer>
        <Styled.FormField placeholder={label} type={type} name={name} toError={toFormError} toErrorEmail={toFormErrorEmail} className={className}/>
      </Styled.FormFieldContainer>
    </>
  );
};

export default TextFieldWrapper;
