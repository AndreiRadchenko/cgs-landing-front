import React, {useState} from 'react';
import { Formik, useFormik } from "formik";
import {loginFormSchema} from "../../../../../helpers/validation";
import * as Styled from "./LoginForm.style";
import Input from "../Input/input.commponent";
import Button from "../Button/button.component";
import {login} from "../../../../../services/api/adminApi";
import Router from 'next/router'
import {useLocalStorageState} from "use-local-storage-state";

const LoginForm = () => {
    const [isSubmitted, setSubmitted] = useState(false);
    const [token, setToken] = useLocalStorageState("token", "");

    const isEmptyObject = (obj) => {
        return JSON.stringify(obj) === "{}";
    };

    return (
        <Formik
            validationSchema={loginFormSchema}
            initialValues={{
                username: "",
                password: "",
            }}

            onSubmit={async (values, { resetForm }) => {
                let token: string;

                try {
                    token = await login(values);

                    setToken(token)
                    setSubmitted(true);

                    Router.push('/admin');
                } catch (error) {
                    setSubmitted(false);
                }
                
                resetForm({});
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
              }) => {
                return (
                    <Styled.LoginWrapper>
                    <Styled.FormWrapper>
                        <Input
                            placeholder="Name"
                            type="text"
                            name="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            errors={errors}
                            touched={touched}
                        />
                        <Input
                            placeholder="Password"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            errors={errors}
                            touched={touched}
                        />
                        <Button
                            type="submit"
                            disabled={
                                isEmptyObject(touched) || !isEmptyObject(errors) || isSubmitting
                            }
                            onClick={handleSubmit}
                        >
                            Log in
                        </Button>
                        <Styled.SuccessMessageContainer>
                            {isSubmitted && (
                                <p className="success-message">
                                    Success
                                </p>
                            )}
                        </Styled.SuccessMessageContainer>
                    </Styled.FormWrapper>
                    </Styled.LoginWrapper>
                );
            }}
        </Formik>
    );
};

export default LoginForm;