import * as yup from "yup";
import { isEmailDomainPublic } from "../utils/checkEmailDomain";

export const BookModalValidation = () => {
  return yup.object({
    name: yup
      .string()
      .required("How should we call you?")
      .trim()
      .matches(/^[a-zA-Z ]+$/, "Invalid name")
      .min(1, "Please fill empty fields")
      .max(150, "You're over the limit"),
    email: yup
      .string()
      .email("Email must be a valid email")
      .required("Enter your email"),
    country: yup.string(),
    phone: yup
      .string()
      .matches(/^[+0-9-()]+$/, "The number can’t contain letters")
      .min(10, "Phone number must be at least 10 digits")
      .when("email", {
        is: (val: string) => isEmailDomainPublic(val),
        then: yup.string().required("Enter your phone number"),
        otherwise: yup.string().notRequired(),
      }),
  });
};
