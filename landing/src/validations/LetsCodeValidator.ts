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
      ),
    email: yup.string().email("Invalid email").required("Required parameter"),
    message: yup
      .string()
      .min(20, "Message should be at least 20 symbols")
      .max(256, "Message is too large")
      .required("Required parameter")
      .matches(
        /^[aA-zZа-яіІєЄїЇґҐА-Я@#-_—()!?;:*"'$%\\'\s]+$/,
        "Only latin and cyrillic are allowed for this field"
      ),
  });
};
