import { Formik } from "formik";
import React from "react";
import TextFieldWrapper from "../CareersForm/Form/FormField";
import AuthSubmitButton from "./AuthSubmitButton";
import { AuthFormBlock, AuthFormError } from "../../styles/AdminAuth";
import { AdminService } from "../../services/AdminService";
import { AdminAuthValidation } from "../../validations/AdminAuthValidation";
import { IAdmin } from "../../types/AdminAuth.types";
import { useState } from "react";
import { useMutation } from "react-query";

const AdminAuthForm = () => {
  const adminService = new AdminService();

  interface IRes {
    data: { accessToken: string };
  }

  const { mutateAsync } = useMutation<IRes, any, IAdmin, any>(
    "key",
    (values: IAdmin) => adminService.authAdmin(values)
  );

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (
    values: IAdmin,
    { resetForm }: { resetForm: VoidFunction }
  ) => {
    try {
      setErrorMessage("");
      const resp: IRes = await mutateAsync(values);
      localStorage.setItem("token", resp.data.accessToken);
    } catch (err) {
      setErrorMessage("Wrong username or password");
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={AdminAuthValidation}
      onSubmit={onSubmit}
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
