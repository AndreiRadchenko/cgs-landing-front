import React from "react";
import { useFormikContext } from "formik";

import { testimonialsInit } from "../consts";
import { ITestimonial } from "../types/Components.types";

const usePushFeedback = () => {
  const { submitForm, setValues, isValid } = useFormikContext<ITestimonial>();

  const submitFunc = (e: React.SyntheticEvent, submit: () => void) => {
    e.preventDefault();
    isValid &&
      submitForm()
        .then(() => submit())
        .then(() =>
          setValues(
            JSON.parse(
              JSON.stringify({
                ...testimonialsInit,
                slideBanner: {
                  image: null,
                },
              })
            )
          )
        );
  };

  return { submitFunc };
};

export default usePushFeedback;
