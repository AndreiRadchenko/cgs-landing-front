import React, { FC } from "react";
import { useField } from "formik";
import { TextFieldProps } from "@mui/material";
import { AdminFormField, AdminFormLabel } from "../../styles/AdminAuth";

interface IFieldProps {
  name: string;
  label: string;
  handleChange: any;
  type?: string;
  placeholder: string;
  labelName: string;
}

const AdminAuthFormInput: FC<IFieldProps> = ({
  name,
  label,
  handleChange,
  type,
  placeholder,
  labelName,
}: IFieldProps) => {
  const [field, meta] = useField<string>(name);

  const configTextField: TextFieldProps = {
    ...field,
    label: label,
    type: type,
    fullWidth: true,
    variant: "standard",
    onChange: handleChange,
    placeholder,
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return (
    <>
      <AdminFormLabel>{labelName}</AdminFormLabel>
      <AdminFormField {...configTextField} />
    </>
  );
};

export default AdminAuthFormInput;
