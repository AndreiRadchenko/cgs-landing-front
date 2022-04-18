import { Formik } from "formik";
import React from "react";
import TextFieldWrapper from "../CareersForm/Form/FormField";
import AuthSubmitButton from "./AuthButton";
import { AuthFormBlock, AuthFormError } from "../../styles/AdminAuth";
import { AdminAuthValidation } from "../../validations/AdminAuthValidation";
import { IAdmin, IRes } from "../../types/Admin/Admin.types";
import { useState } from "react";
import { useMutation } from "react-query";
import { authService } from "../../services/login";
import { initAdmin } from "../../consts";
import { queryKeys } from "../../consts/queryKeys";

const onSubmit = async (
  values: IAdmin,
  resetForm: VoidFunction,
  mutateAsync: any,
  setErrorMessage: (text: string) => void,
) => {
  try {
    setErrorMessage("");
    const resp: IRes = await mutateAsync(values);
    localStorage.setItem("token", resp.accessToken);
  } catch (err) {
    setErrorMessage("Wrong username or password");
  }
  resetForm();
};

const AdminAuthForm = () => {

  const [errorMessage, setErrorMessage] = useState("");

  const { mutateAsync } = useMutation(
    queryKeys.AdminAuth,
    (values: IAdmin) => authService.adminAuth(values)
  );

  return (
    <Formik
      initialValues={initAdmin}
      validationSchema={AdminAuthValidation}
      onSubmit={(values, {resetForm}) => onSubmit(values, resetForm, mutateAsync, setErrorMessage)}
    >
      {(fprops) => {
        return (
          <AuthFormBlock>
            <TextFieldWrapper
              name="username"
              label="username"
              handleChange={fprops.handleChange}
            />
            <TextFieldWrapper
              name="password"
              label="password"
              handleChange={fprops.handleChange}
            />
            <AuthFormError>{errorMessage}</AuthFormError>
            <AuthSubmitButton />
          </AuthFormBlock>
        );
      }}
    </Formik>
  );
};

export default AdminAuthForm;
