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
    email: yup.string().email().required("Enter email"),
    service: yup.string().required("Select service"),
  });
};
