import { Formik } from "formik";
import TextFieldWrapper from "../CareersForm/Form/FormField";
import AuthSubmitButton from "./AuthSubmitButton";
import { AuthFormBlock, AuthFormError } from "../../styles/AdminAuth";
import { AdminService } from "../../services/AdminService";
import { AdminAuthValidation } from "../../validations/AdminAuthValidation";
import { IAdmin } from "../../types/AdminAuth.types";
import { useState } from "react";

const AdminAuthForm = () => {

  const adminService = new AdminService;

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (values: IAdmin, { resetForm }: { resetForm: VoidFunction }) => {
    try {
      setErrorMessage("");
      const resp = await adminService.authAdmin(values);
      localStorage.setItem('token', resp.data.accessToken);
    } catch (err) {
      setErrorMessage("Wrong username or password");
    }
    resetForm()
  }

  return (
    <Formik initialValues={{ username: "", password: "" }} validationSchema={AdminAuthValidation} onSubmit={onSubmit}>
      {(fprops) => {
        return (
          <AuthFormBlock>
            <TextFieldWrapper name="username" label="username" handleChange={fprops.handleChange} />
            <TextFieldWrapper name="password" label="password" handleChange={fprops.handleChange} />
            <AuthFormError>
              {errorMessage}
            </AuthFormError>
            <AuthSubmitButton />
          </AuthFormBlock>
        )
      }}
    </Formik>
  )
}

export default AdminAuthForm;