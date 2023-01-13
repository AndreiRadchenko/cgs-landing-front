import { useFormikContext } from "formik";
import React, { FC } from "react";
import * as Styled from "../../../../styles/BookModalForm/FormField.styled";

export interface IFieldProps {
  name: string;
  label: string;
  type?: string;
  fieldError?: string;
}

const TextFieldWrapper: FC<IFieldProps> = ({
  name,
  label,
  type = "text",
  fieldError,
}: IFieldProps) => {
  const { errors, touched } = useFormikContext<any>();
  return (
    <>
      <Styled.FormFieldLabel htmlFor={label}>{label}</Styled.FormFieldLabel>
      <Styled.FormFieldContainer>
        <Styled.FormField
          className={errors[name] && touched[name] ? "formikErrors" : "default"}
          placeholder={label}
          type={type}
          name={name}
        />
        {errors[name] && touched[name] && (
          <Styled.ErrorField>{fieldError}</Styled.ErrorField>
        )}
      </Styled.FormFieldContainer>
    </>
  );
};

export default TextFieldWrapper;
