import { useFormikContext, useField } from "formik";
import React, { FC, useState, useEffect } from "react";
import { IFormState } from "..";
import * as Styled from "../../../../styles/BookModalForm/FormField.styled";

export interface IDetailsFieldProps {
  name: keyof IFormState;
  label: string;
  placeholder: string;
  btnIsClicked: boolean;
  maxLength: number;
}

export const FormFieldDetails: FC<IDetailsFieldProps> = ({
  name,
  label,
  placeholder,
  btnIsClicked,
  maxLength,
}) => {
  const [usedChars, setUsedChars] = useState(maxLength);
  const { errors } = useFormikContext<IFormState>();
  const [field, meta] = useField(name);

  useEffect(() => {
    setUsedChars(meta.value.length);
  }, [meta.value]);

  return (
    <>
      <Styled.FormFieldLabel htmlFor={label}>
        {label}
        <span> (Optional)</span>
      </Styled.FormFieldLabel>
      <Styled.DetailsField
        className={btnIsClicked && errors[name] ? "formikErrors" : "default"}
        placeholder={placeholder}
        name={name}
        value={meta.value}
        onChange={field.onChange}
        maxLength={maxLength}
      />
      {/* <ErrorMessage name="details" /> */}

      <Styled.CharCounter>{`${usedChars}/${maxLength}`}</Styled.CharCounter>
      {btnIsClicked && errors[name] && (
        <Styled.ErrorField>{errors[name]}</Styled.ErrorField>
      )}
    </>
  );
};
