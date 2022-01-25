import * as yup from "yup";

export const LestCodeValidation = () => {
  return yup.object({
    name: yup
      .string()
      .min(1, "Name is too short")
      .max(25, "Name is too large")
      .required("Required parameter"),
    email: yup.string().email("Wrong email").required("Required parameter"),
    message: yup
      .string()
      .min(5, "Message is too short")
      .max(256, "Message is too large")
      .required("Required parameter"),
  });
};
