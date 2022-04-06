import React, { FC } from "react";
import { useField } from "formik";
import { TextFieldProps } from "@mui/material";
import * as Styled from "./FormField.styled";

interface IFieldProps {
  name: string;
  label: string;
  handleChange: any;
}

const TextfieldWrapper: FC<IFieldProps> = ({
  name,
  label,
  handleChange,
}: IFieldProps) => {
  const [field, meta] = useField<string>(name);

  const configTextfield: TextFieldProps = {
    ...field,
    label: label,
    fullWidth: true,
    variant: "standard",
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return (
    <>
      <Styled.Field {...configTextfield} />
    </>
  );
};

export default TextfieldWrapper;
