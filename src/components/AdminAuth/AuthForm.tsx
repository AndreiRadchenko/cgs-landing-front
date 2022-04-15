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
import { useRouter } from "next/router";

const AdminAuthForm = () => {
  const adminService = new AdminService();
  const router = useRouter();

  interface IRes {
    data: { accessToken: string };
  }
  const [errorMessage, setErrorMessage] = useState("");

  const { mutateAsync } = useMutation<IRes, any, IAdmin, any>(
    "key",
    (values: IAdmin) => adminService.authAdmin(values),
    {
      onSuccess: (resp) => {
        localStorage.setItem("token", resp.data.accessToken);
        router.push(`${router.pathname}/authorized`);
      },
      onError: () => {
        setErrorMessage("Wrong username or password");
      },
    }
  );

  const onSubmit = async (
    values: IAdmin,
    { resetForm }: { resetForm: VoidFunction }
  ) => {
    await mutateAsync(values);
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
              type="password"
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
