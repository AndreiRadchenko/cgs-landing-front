import * as yup from "yup";

export const LestCodeValidation = () => {
  return yup.object({
    name: yup
      .string()
      .min(1, "Name is too short")
      .max(25, "Name is too large")
      .required("Required parameter")
      .matches(
        /^[aA-zZа-яіІєЄїЇґҐА-Я\'\s]+$/,
        "Only latin and cyrillic are allowed for this field"
      )
      .matches(/^(?!.*<[^>]+>).*/i, "HTML are not allowed"),
    email: yup
      .string()
      .email("Invalid email")
      .required("Required parameter")
      .matches(/^((?!.ru).)*$/m, "Domain ru isn't allowed")
      .matches(/^(?!.*<[^>]+>).*/i, "HTML are not allowed"),
    message: yup
      .string()
      .max(256, "Message is too large")
      .required("Required parameter")
      .matches(
        /^[aA-zZа-яіІєЄїЇґҐА-Я@#-_—()!?;:*"'$%\\'\s]+$/,
        "Only latin and cyrillic are allowed for this field"
      )
      .matches(/^(?!.*<[^>]+>).*/i, "HTML are not allowed"),
  });
};
