import { useFormikContext } from "formik";
import React, { FC } from "react";
import { IFormState } from "..";
import * as Styled from "../../../../styles/BookModalForm/FormField.styled";

export interface IFieldProps {
  name: keyof IFormState;
  label: string;
  btnIsClicked: boolean;
  type?: string;
}

const TextFieldWrapper: FC<IFieldProps> = ({
  name,
  label,
  btnIsClicked,
  type = "text",
}: IFieldProps) => {
  const { errors } = useFormikContext<IFormState>();

  const PHONE_OPTIONAL = "Phone number";

  return (
    <>
      <Styled.FormFieldLabel htmlFor={label}>
        {label}
        {PHONE_OPTIONAL === label && <span> (Optional)</span>}
      </Styled.FormFieldLabel>
      <Styled.FormFieldContainer>
        <Styled.FormField
          className={btnIsClicked && errors[name] ? "formikErrors" : "default"}
          placeholder={label}
          type={type}
          name={name}
        />
        {btnIsClicked && errors[name] && (
          <Styled.ErrorField>{errors[name]}</Styled.ErrorField>
        )}
      </Styled.FormFieldContainer>
    </>
  );
};

export default TextFieldWrapper;
