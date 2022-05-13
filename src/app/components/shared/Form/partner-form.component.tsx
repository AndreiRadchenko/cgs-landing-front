import React, { useState } from "react";
import { Formik } from "formik";
import * as Styled from "./form.styles";
import Input from "../Input/input.commponent";
import Textarea from "../Textarea/textarea.component";
import Button from "../Button/button.component";
import { registrationFormSchema } from "../../../../helpers/validation";
import { sendFormPartnersEA } from "../../../../services/event";
import { sendPartnersFeedback } from "../../../../services/api/sendFeedback";

const PartnerForm = () => {
  const [isSubmitted, setSubmitted] = useState(false);

  const isEmptyObject = (obj) => {
    return JSON.stringify(obj) === "{}";
  };

  return (
    <Formik
      validationSchema={registrationFormSchema}
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      onSubmit={async (values, { resetForm }) => {
        sendFormPartnersEA(values);

        await sendPartnersFeedback(values);

        resetForm({});
        setSubmitted(true);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
        return (
          <Styled.FormWrapper>
            <Input
              placeholder="Name"
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              errors={errors}
              touched={touched}
            />
            <Input
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              errors={errors}
              touched={touched}
            />
            <Textarea
              placeholder="Any ideas?"
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              errors={errors}
              touched={touched}
            />
            <Button
              type="submit"
              disabled={isEmptyObject(touched) || !isEmptyObject(errors) || isSubmitting}
              onClick={handleSubmit}
            >
              Send
            </Button>
            <Styled.SuccessMessageContainer>
              {isSubmitted && (
                <p className="success-message">Don’t be bored of waiting, we’ll answer soon!</p>
              )}
            </Styled.SuccessMessageContainer>
          </Styled.FormWrapper>
        );
      }}
    </Formik>
  );
};
export default PartnerForm;
