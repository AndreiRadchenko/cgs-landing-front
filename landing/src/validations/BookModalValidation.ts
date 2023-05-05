import * as yup from "yup";

export const BookModalValidation = () => {
  return yup.object({
    name: yup
      .string()
      .required("How should we call you?")
      .trim()
      .matches(/^[a-zA-Z ]+$/, "invalid name")
      .min(1, "please fill empty fields")
      .max(150, "you're over the limit"),
    phone: yup
      .string()
      .matches(/^[+0-9-()]+$/, "The number can’t contain letters"),
    country: yup.string(),
    email: yup.string().email().required("Enter your email"),
    // service: yup.string().required("Select service"),
    details: yup
      .string()
      // .required()
      .trim(),
    // .matches(/\S/, "Details field can't contain only space"),
  });
};
