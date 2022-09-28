import { Formik } from "formik";
import React from "react";
import AuthSubmitButton from "./AuthButton";
import { AuthFormBlock, AuthFormError } from "../../styles/AdminAuth";
import { AdminAuthValidation } from "../../validations/AdminAuthValidation";
import { IAdmin, IRes } from "../../types/Admin/Admin.types";
import { useState } from "react";
import { useMutation } from "react-query";
import { authService } from "../../services/login";
import { initAdmin, storeKeys } from "../../consts";
import { queryKeys } from "../../consts/queryKeys";
import { useRouter } from "next/router";
import AdminAuthFormInput from "./AdminAuthFormInput";

const AdminAuthForm = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const { mutateAsync } = useMutation<any, IAdmin, any, IRes>(
    queryKeys.AdminAuth,
    (values: IAdmin) => authService.adminAuth(values)
  );

  const onSubmit = async (values: IAdmin, resetForm: VoidFunction) => {
    try {
      setErrorMessage("");
      const resp: IRes = await mutateAsync(values);
      localStorage.setItem(storeKeys.token, resp.accessToken);
      router.push("AdminPage");
    } catch (err) {
      setErrorMessage("Wrong username or password");
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={initAdmin}
      validationSchema={AdminAuthValidation}
      onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
    >
      {(fprops) => {
        return (
          <AuthFormBlock>
            <AdminAuthFormInput
              name="username"
              label="username"
              handleChange={fprops.handleChange}
              type="text"
              placeholder="Username"
              labelName="Username:"
            />
            <AdminAuthFormInput
              name="password"
              label="password"
              handleChange={fprops.handleChange}
              type="password"
              placeholder="Password"
              labelName="Password:"
              className="password"
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
