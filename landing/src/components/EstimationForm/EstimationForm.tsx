/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { StyledButton } from "./index.styled";
import Popover from "./Popover";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().min(2),
});

const EstimationForm = () => {
  const onSubmitHandler = () => {};
  const [isShow, setIsShow] = useState(false);

  return (
    <Formik
      initialValues={{ name: 1 }}
      onSubmit={(values, actions) => {
        console.log(
          "🚀 ~ file: EstimationForm.tsx:59 ~ EstimationForm ~ actions",
          values
        );
      }}
      validateOnChange={false}
      validationSchema={schema}
    >
      {(props) => (
        <form>
          <StyledButton type="submit">
            {"< NEXT SECTION >"}
            <Popover isShow={isShow} />
          </StyledButton>
        </form>
      )}
    </Formik>
  );
};

export default EstimationForm;
