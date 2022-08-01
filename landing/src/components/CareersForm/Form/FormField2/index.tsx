import React, { FC } from "react";
import * as Styled from "./FormField2.styled";

interface IFieldProps {
  name: string;
  label: string;
  type?: string;
}

const TextFieldWrapper: FC<IFieldProps> = ({
  name,
  label,
  type = "text",
}: IFieldProps) => {
  return (
    <>
      <Styled.FormFieldContainer>
        <Styled.FormField placeholder={label} type={type} name={name} />
      </Styled.FormFieldContainer>
    </>
  );
};

export default TextFieldWrapper;
