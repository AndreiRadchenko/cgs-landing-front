import * as yup from "yup";

export const BookModalValidation = () => {
  return yup.object({
    name: yup.string().required("How should we call you?"),
    email: yup.string().email().required("Enter e-mail"),
    service: yup.string(),
  });
};
